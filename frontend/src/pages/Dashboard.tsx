import { useState, useEffect } from 'react';
import { apiGet } from '../utils/api';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import './Dashboard.css';

interface DashboardData {
  users: {
    total: number;
    active_30d: number;
  };
  shifts: {
    total: number;
    this_month: number;
  };
  earnings: {
    total: number;
    this_month: number;
  };
  replacement_requests: {
    total: number;
  };
  last_updated: string;
}

interface TrendData {
  month: string;
  shifts: number;
}

const COLORS = ['#34c759', '#007aff', '#ff9500', '#ff3b30', '#af52de', '#ff2d55', '#5856d6', '#ffcc00'];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  
  // User Metrics
  const [userRetention, setUserRetention] = useState({ rate: 0, current: 0, previous: 0 });
  const [profileCompletion, setProfileCompletion] = useState({ rate: 0, total: 0, complete: 0 });
  const [usersWithAvailability, setUsersWithAvailability] = useState(0);
  const [activeUsers, setActiveUsers] = useState({ dau: 0, wau: 0, mau: 0 });
  
  // Shift Metrics
  const [shiftsTrend, setShiftsTrend] = useState<TrendData[]>([]);
  const [shiftsByType, setShiftsByType] = useState({ day_shifts: 0, night_shifts: 0 });
  const [avgShiftsPerUser, setAvgShiftsPerUser] = useState({ week: 0, month: 0 });
  const [shiftGap, setShiftGap] = useState(0);
  const [weekendWeekday, setWeekendWeekday] = useState({ weekend: 0, weekday: 0 });
  const [shiftLifecycle, setShiftLifecycle] = useState({ week: 0, month: 0 });
  
  // Financial Metrics
  const [avgEarningsPerShift, setAvgEarningsPerShift] = useState({ week: 0, month: 0, all: 0 });
  
  // Availability Metrics
  const [availabilityEntries, setAvailabilityEntries] = useState({ week: 0, month: 0 });
  const [availabilityUpdateFreq, setAvailabilityUpdateFreq] = useState(0);
  const [availabilityStatus, setAvailabilityStatus] = useState<Record<string, number>>({});
  
  // Replacement Request Metrics
  const [replacementRequests, setReplacementRequests] = useState({
    total: 0,
    success_rate: 0,
    rate_per_100: 0,
    per_user: 0,
    by_type: { day: 0, night: 0 },
    by_day: {} as Record<string, number>,
    reasons: {} as Record<string, number>,
  });
  
  // Operational Metrics
  const [scheduleCoverage, setScheduleCoverage] = useState({ week: 0, month: 0 });
  const [dataQuality, setDataQuality] = useState({
    shifts_completeness: 0,
    profile_completeness: 0,
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Load dashboard summary
      const dashboard = await apiGet<DashboardData>('/api/metrics/dashboard');
      setDashboardData(dashboard);

      // User Metrics
      try {
        const retention = await apiGet<{ retention_rate_percent: number; current_month_active: number; previous_month_active: number }>('/api/metrics/users/retention');
        setUserRetention({
          rate: retention.retention_rate_percent || 0,
          current: retention.current_month_active || 0,
          previous: retention.previous_month_active || 0,
        });
      } catch (err) {
        console.warn('Failed to load user retention:', err);
      }

      try {
        const profile = await apiGet<{ completion_rate_percent: number; total_users: number; users_with_complete_profile: number }>('/api/metrics/users/profile-completion');
        setProfileCompletion({
          rate: profile.completion_rate_percent || 0,
          total: profile.total_users || 0,
          complete: profile.users_with_complete_profile || 0,
        });
      } catch (err) {
        console.warn('Failed to load profile completion:', err);
      }

      try {
        const availability = await apiGet<{ value: number }>('/api/metrics/users/availability-set?days=30');
        setUsersWithAvailability(availability.value || 0);
      } catch (err) {
        console.warn('Failed to load users with availability:', err);
      }

      try {
        const [dau, wau, mau] = await Promise.all([
          apiGet<{ value: number }>('/api/metrics/analytics/active-users?period=daily'),
          apiGet<{ value: number }>('/api/metrics/analytics/active-users?period=weekly'),
          apiGet<{ value: number }>('/api/metrics/analytics/active-users?period=monthly'),
        ]);
        setActiveUsers({
          dau: dau.value || 0,
          wau: wau.value || 0,
          mau: mau.value || 0,
        });
      } catch (err) {
        console.warn('Failed to load active users:', err);
      }

      // Shift Metrics
      try {
        const trend = await apiGet<{ trend: TrendData[] }>('/api/metrics/analytics/shifts-trend?months=6');
        setShiftsTrend(trend.trend || []);
      } catch (err) {
        console.warn('Failed to load shifts trend:', err);
      }

      try {
        const byType = await apiGet<{ day_shifts: number; night_shifts: number }>('/api/metrics/shifts/by-type');
        setShiftsByType(byType);
      } catch (err) {
        console.warn('Failed to load shifts by type:', err);
      }

      try {
        const [week, month] = await Promise.all([
          apiGet<{ average: number }>('/api/metrics/shifts/average-per-user?period=week'),
          apiGet<{ average: number }>('/api/metrics/shifts/average-per-user?period=month'),
        ]);
        setAvgShiftsPerUser({
          week: week.average || 0,
          month: month.average || 0,
        });
      } catch (err) {
        console.warn('Failed to load avg shifts per user:', err);
      }

      try {
        const gap = await apiGet<{ average_days_between_shifts: number }>('/api/metrics/shifts/gap-analysis');
        setShiftGap(gap.average_days_between_shifts || 0);
      } catch (err) {
        console.warn('Failed to load shift gap:', err);
      }

      try {
        const weekend = await apiGet<{ weekend_shifts: number; weekday_shifts: number }>('/api/metrics/shifts/weekend-vs-weekday');
        setWeekendWeekday({
          weekend: weekend.weekend_shifts || 0,
          weekday: weekend.weekday_shifts || 0,
        });
      } catch (err) {
        console.warn('Failed to load weekend/weekday data:', err);
      }

      try {
        const [weekLifecycle, monthLifecycle] = await Promise.all([
          apiGet<{ creation_rate: number }>('/api/metrics/shifts/lifecycle?period=week'),
          apiGet<{ creation_rate: number }>('/api/metrics/shifts/lifecycle?period=month'),
        ]);
        setShiftLifecycle({
          week: weekLifecycle.creation_rate || 0,
          month: monthLifecycle.creation_rate || 0,
        });
      } catch (err) {
        console.warn('Failed to load shift lifecycle:', err);
      }

      // Financial Metrics
      try {
        const [weekEarnings, monthEarnings, allEarnings] = await Promise.all([
          apiGet<{ value: number }>('/api/metrics/financial/average-earnings-per-shift?period=week'),
          apiGet<{ value: number }>('/api/metrics/financial/average-earnings-per-shift?period=month'),
          apiGet<{ value: number }>('/api/metrics/financial/average-earnings-per-shift?period=all'),
        ]);
        setAvgEarningsPerShift({
          week: weekEarnings.value || 0,
          month: monthEarnings.value || 0,
          all: allEarnings.value || 0,
        });
      } catch (err) {
        console.warn('Failed to load avg earnings:', err);
      }

      // Availability Metrics
      try {
        const [weekEntries, monthEntries] = await Promise.all([
          apiGet<{ value: number }>('/api/metrics/availability/entries-created?period=week'),
          apiGet<{ value: number }>('/api/metrics/availability/entries-created?period=month'),
        ]);
        setAvailabilityEntries({
          week: weekEntries.value || 0,
          month: monthEntries.value || 0,
        });
      } catch (err) {
        console.warn('Failed to load availability entries:', err);
      }

      try {
        const updateFreq = await apiGet<{ average_updates_per_user: number }>('/api/metrics/availability/update-frequency');
        setAvailabilityUpdateFreq(updateFreq.average_updates_per_user || 0);
      } catch (err) {
        console.warn('Failed to load availability update frequency:', err);
      }

      try {
        const availability = await apiGet<{ distribution: Record<string, number> }>('/api/metrics/availability/status-distribution');
        setAvailabilityStatus(availability.distribution || {});
      } catch (err) {
        console.warn('Failed to load availability status:', err);
      }

      // Replacement Request Metrics
      try {
        const performance = await apiGet<{ total_requests: number; success_rate_percent: number }>('/api/metrics/replacement-requests/performance');
        const rate = await apiGet<{ rate_per_100_shifts: number }>('/api/metrics/replacement-requests/rate');
        const perUser = await apiGet<{ average: number }>('/api/metrics/replacement-requests/per-user');
        const byType = await apiGet<{ day_requests: number; night_requests: number }>('/api/metrics/replacement-requests/by-shift-type');
        const byDay = await apiGet<{ distribution: Record<string, number> }>('/api/metrics/replacement-requests/by-day-of-week');
        const reasons = await apiGet<{ most_common_reasons: Record<string, number> }>('/api/metrics/replacement-requests/reasons');
        
        setReplacementRequests({
          total: performance.total_requests || 0,
          success_rate: performance.success_rate_percent || 0,
          rate_per_100: rate.rate_per_100_shifts || 0,
          per_user: perUser.average || 0,
          by_type: {
            day: byType.day_requests || 0,
            night: byType.night_requests || 0,
          },
          by_day: byDay.distribution || {},
          reasons: reasons.most_common_reasons || {},
        });
      } catch (err) {
        console.warn('Failed to load replacement requests:', err);
      }

      // Operational Metrics
      try {
        const [weekCoverage, monthCoverage] = await Promise.all([
          apiGet<{ coverage_percent: number }>('/api/metrics/operational/schedule-coverage?period=week'),
          apiGet<{ coverage_percent: number }>('/api/metrics/operational/schedule-coverage?period=month'),
        ]);
        setScheduleCoverage({
          week: weekCoverage.coverage_percent || 0,
          month: monthCoverage.coverage_percent || 0,
        });
      } catch (err) {
        console.warn('Failed to load schedule coverage:', err);
      }

      try {
        const quality = await apiGet<{ shifts_data_completeness_percent: number; profile_completeness_percent: number }>('/api/metrics/operational/data-quality');
        setDataQuality({
          shifts_completeness: quality.shifts_data_completeness_percent || 0,
          profile_completeness: quality.profile_completeness_percent || 0,
        });
      } catch (err) {
        console.warn('Failed to load data quality:', err);
      }
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-loading">Loading metrics...</div>
      </div>
    );
  }

  const shiftsByTypeData = [
    { name: 'Day', value: shiftsByType.day_shifts },
    { name: 'Night', value: shiftsByType.night_shifts },
  ];

  const availabilityData = Object.entries(availabilityStatus).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' '),
    value,
  }));

  const weekendData = [
    { name: 'Weekend', value: weekendWeekday.weekend },
    { name: 'Weekday', value: weekendWeekday.weekday },
  ];

  const replacementByTypeData = [
    { name: 'Day', value: replacementRequests.by_type.day },
    { name: 'Night', value: replacementRequests.by_type.night },
  ];

  const replacementByDayData = Object.entries(replacementRequests.by_day).map(([day, value]) => ({
    name: day,
    value,
  })).sort((a, b) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.indexOf(a.name) - days.indexOf(b.name);
  });

  const replacementReasonsData = Object.entries(replacementRequests.reasons).map(([reason, value]) => ({
    name: reason,
    value,
  })).sort((a, b) => b.value - a.value).slice(0, 5);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Comprehensive Metrics Dashboard</h1>
        <button onClick={loadDashboardData} className="refresh-btn">
          Refresh
        </button>
      </div>

      <div className="dashboard-content">
        {/* Key Metrics Cards */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Total Users</div>
            <div className="metric-value">{dashboardData?.users.total || 0}</div>
            <div className="metric-subtext">
              {dashboardData?.users.active_30d || 0} active (30d)
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-label">Total Shifts</div>
            <div className="metric-value">{dashboardData?.shifts.total || 0}</div>
            <div className="metric-subtext">
              {dashboardData?.shifts.this_month || 0} this month
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-label">Total Earnings</div>
            <div className="metric-value">₽{dashboardData?.earnings.total.toLocaleString() || 0}</div>
            <div className="metric-subtext">
              ₽{dashboardData?.earnings.this_month.toLocaleString() || 0} this month
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-label">Replacement Requests</div>
            <div className="metric-value">{replacementRequests.total}</div>
            <div className="metric-subtext">
              {replacementRequests.success_rate.toFixed(1)}% success rate
            </div>
          </div>
        </div>

        {/* User & Engagement Metrics Section */}
        <div className="section-header">
          <h2>User & Engagement Metrics</h2>
        </div>
        <div className="charts-row">
          <div className="chart-card">
            <h3>User Retention Rate</h3>
            <div className="metric-display">
              <div className="metric-value-large">{userRetention.rate.toFixed(1)}%</div>
              <div className="metric-details">
                <div>Current Month: {userRetention.current}</div>
                <div>Previous Month: {userRetention.previous}</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Profile Completion</h3>
            <div className="metric-display">
              <div className="metric-value-large">{profileCompletion.rate.toFixed(1)}%</div>
              <div className="metric-details">
                <div>{profileCompletion.complete} / {profileCompletion.total} users</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Active Users (DAU/WAU/MAU)</h3>
            <div style={{ width: '100%', height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'DAU', value: activeUsers.dau },
                  { name: 'WAU', value: activeUsers.wau },
                  { name: 'MAU', value: activeUsers.mau },
                ]} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#34c759" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h3>Users with Availability Set</h3>
            <div className="metric-display">
              <div className="metric-value-large">{usersWithAvailability}</div>
              <div className="metric-details">Last 30 days</div>
            </div>
          </div>
        </div>

        {/* Shift Metrics Section */}
        <div className="section-header">
          <h2>Shift Metrics</h2>
        </div>
        <div className="chart-card">
          <h3>Shifts Created Trend (6 Months)</h3>
          {shiftsTrend.length > 0 ? (
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={shiftsTrend} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="shifts"
                    stroke="#34c759"
                    strokeWidth={2}
                    name="Shifts"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="chart-empty">No data available</div>
          )}
        </div>

        <div className="charts-row">
          <div className="chart-card">
            <h3>Shifts by Type</h3>
            {shiftsByTypeData.some(d => d.value > 0) ? (
              <div style={{ width: '100%', height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={shiftsByTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {shiftsByTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="chart-empty">No data available</div>
            )}
          </div>

          <div className="chart-card">
            <h3>Weekend vs Weekday</h3>
            {weekendData.some(d => d.value > 0) ? (
              <div style={{ width: '100%', height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weekendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#007aff" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="chart-empty">No data available</div>
            )}
          </div>

          <div className="chart-card">
            <h3>Average Shifts per User</h3>
            <div className="metric-display">
              <div className="metric-details">
                <div>Week: {avgShiftsPerUser.week.toFixed(2)}</div>
                <div>Month: {avgShiftsPerUser.month.toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Shift Gap Analysis</h3>
            <div className="metric-display">
              <div className="metric-value-large">{shiftGap.toFixed(1)}</div>
              <div className="metric-details">Average days between shifts</div>
            </div>
          </div>
        </div>

        {/* Financial Metrics Section */}
        <div className="section-header">
          <h2>Financial Metrics</h2>
        </div>
        <div className="charts-row">
          <div className="chart-card">
            <h3>Average Earnings per Shift</h3>
            <div className="metric-display">
              <div className="metric-details">
                <div>Week: ₽{avgEarningsPerShift.week.toFixed(2)}</div>
                <div>Month: ₽{avgEarningsPerShift.month.toFixed(2)}</div>
                <div>All Time: ₽{avgEarningsPerShift.all.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Metrics Section */}
        <div className="section-header">
          <h2>Availability Metrics</h2>
        </div>
        <div className="charts-row">
          <div className="chart-card">
            <h3>Availability Entries Created</h3>
            <div className="metric-display">
              <div className="metric-details">
                <div>Week: {availabilityEntries.week}</div>
                <div>Month: {availabilityEntries.month}</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Update Frequency</h3>
            <div className="metric-display">
              <div className="metric-value-large">{availabilityUpdateFreq.toFixed(1)}</div>
              <div className="metric-details">Average updates per user/month</div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Availability Status Distribution</h3>
          {availabilityData.length > 0 ? (
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={availabilityData} margin={{ top: 5, right: 20, left: 0, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#007aff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="chart-empty">No data available</div>
          )}
        </div>

        {/* Replacement Request Metrics Section */}
        <div className="section-header">
          <h2>Replacement Request Metrics</h2>
        </div>
        <div className="charts-row">
          <div className="chart-card">
            <h3>Request Rate</h3>
            <div className="metric-display">
              <div className="metric-value-large">{replacementRequests.rate_per_100.toFixed(2)}</div>
              <div className="metric-details">Requests per 100 shifts</div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Average per User</h3>
            <div className="metric-display">
              <div className="metric-value-large">{replacementRequests.per_user.toFixed(2)}</div>
              <div className="metric-details">Requests per user</div>
            </div>
          </div>
        </div>

        <div className="charts-row">
          <div className="chart-card">
            <h3>Requests by Shift Type</h3>
            {replacementByTypeData.some(d => d.value > 0) ? (
              <div style={{ width: '100%', height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={replacementByTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {replacementByTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="chart-empty">No data available</div>
            )}
          </div>

          <div className="chart-card">
            <h3>Requests by Day of Week</h3>
            {replacementByDayData.length > 0 ? (
              <div style={{ width: '100%', height: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={replacementByDayData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff9500" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="chart-empty">No data available</div>
            )}
          </div>
        </div>

        {replacementReasonsData.length > 0 && (
          <div className="chart-card">
            <h3>Top Replacement Request Reasons</h3>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={replacementReasonsData} margin={{ top: 5, right: 20, left: 0, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ff3b30" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Operational Metrics Section */}
        <div className="section-header">
          <h2>Operational Metrics</h2>
        </div>
        <div className="charts-row">
          <div className="chart-card">
            <h3>Schedule Coverage</h3>
            <div className="metric-display">
              <div className="metric-details">
                <div>Week: {scheduleCoverage.week.toFixed(1)}%</div>
                <div>Month: {scheduleCoverage.month.toFixed(1)}%</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>Data Quality</h3>
            <div className="metric-display">
              <div className="metric-details">
                <div>Shifts Completeness: {dataQuality.shifts_completeness.toFixed(1)}%</div>
                <div>Profile Completeness: {dataQuality.profile_completeness.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
