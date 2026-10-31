const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  file: '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z"/><path d="M13 3v7h7"/>',
  checkSquare: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m7 12 3 3 7-7"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  alert: '<path d="m12 3 9 17H3z"/><path d="M12 9v4m0 3h.01"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  tool: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-3-3z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 6-7"/>',
  form: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  expand: '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  plusCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8m-4-4h8"/>',
  minusCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5m-5 5V3"/>',
  menu: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9m-1-11.8a4 4 0 0 1 0 7.8"/>',
  wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18M16 14h2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="m16 4 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15z"/>'
};

const topDeals = [
  { name: 'Michael Jordan', email: 'michael.jordan@example.com', amount: '$2,893', initials: 'MJ', color: '#b4856e' },
  { name: 'Emige Kilenda', email: 'emige.kilenda@gmail.com', amount: '$4,289', initials: 'EK', color: '#ff9b66' },
  { name: 'Randy Origogo', email: 'randy.origogo@gmail.com', amount: '$6,347', initials: 'RO', color: '#263b4c' },
  { name: 'George Peterson', email: 'george.peterson@gmail.com', amount: '$3,894', initials: 'GP', color: '#9ad9c2' },
  { name: 'Kiara Advion', email: 'kiara.advion@gmail.com', amount: '$2,679', initials: 'KA', color: '#e7a4cc' }
];

const statistics = [
  { title: 'Total Customers', value: '102,890', trend: '+40%', icon: 'users', path: 'M1 12 9 8l9 4 8-7 9 6 8-5 9 5 8-7 9 4 9-2 8 4' },
  { title: 'Total Revenue', value: '$56,562', trend: '+25%', icon: 'wallet', path: 'M1 12 8 8l8 3 8-6 8 7 8-4 8 3 8-6 9 5' },
  { title: 'Conversion Ratio', value: '12.08%', trend: '-12%', icon: 'chart', path: 'M1 13 8 12l8-5 7 7 8-10 8 7 8-2 9 5' },
  { title: 'Total Deals', value: '2,543', trend: '+16%', icon: 'briefcase', path: 'M1 9 8 7l8 2 7 4 8-4 8 2 8-5 9 4' }
];

const sources = [
  { name: 'Mobile', value: '1,624' },
  { name: 'Desktop', value: '1,267' },
  { name: 'Laptop', value: '1,153' },
  { name: 'Tablet', value: '679' }
];

const dealStatuses = [
  { label: 'Successful Deals', value: '687 deals' },
  { label: 'Pending Deals', value: '1,073 deals' },
  { label: 'Rejected Deals', value: '1,659 deals' },
  { label: 'Upcoming Deals', value: '621 deals' }
];

const activities = [
  { title: 'Update of calendar events', detail: 'Added new events in next week.', time: '4.30PM' },
  { title: 'New theme for Nexora Website', detail: 'Completed', time: '3 hrs' },
  { title: 'Created a new Task today', detail: '', time: '11:22 AM' },
  { title: 'New member joined today', detail: '', time: 'Today' },
  { title: '32 New people joined summit.', detail: '', time: '22 hrs' },
  { title: 'Monthly sales report published', detail: 'Your report is ready to view.', time: 'Yesterday' },
  { title: 'New deal moved to negotiation', detail: 'Sales team updated the deal.', time: '2 days' }
];

const deals = [
  { name: 'Mayer Kofy', initials: 'MK', category: 'Manufacture', email: 'mayerkofy@gmail.com', location: 'Germany', date: 'Sep 15 - Oct 12, 2029', amount: 4299 },
  { name: 'Andrew Garfield', initials: 'AG', category: 'Development', email: 'andrewg@gmail.com', location: 'Canada', date: 'Apr 10 - Oct 12, 2023', amount: 2679 },
  { name: 'Simon Cowell', initials: 'SC', category: 'Service', email: 'simonc@gmail.com', location: 'Kenya', date: 'Sep 15 - Oct 12, 2029', amount: 6347 },
  { name: 'Michael Hen', initials: 'MH', category: 'Marketing', email: 'michaelhen@gmail.com', location: 'USA', date: 'Apr 14 - Dec 14, 2023', amount: 3894 },
  { name: 'Jacob Smith', initials: 'JS', category: 'Social Platform', email: 'jacobsmith@gmail.com', location: 'Singapore', date: 'Feb 25 - Nov 26, 2029', amount: 2893 }
];

const pageViews = {
  CRM: {
    description: 'Manage leads, contacts, and customer relationships.',
    action: 'Add contact',
    metrics: [['2,408', 'Total contacts', '+12.4%'], ['186', 'New leads', 'This month'], ['68.4%', 'Lead conversion', '+4.2%'], ['24', 'Tasks due', 'This week']],
    tableTitle: 'Recent contacts',
    columns: ['Name', 'Company', 'Email', 'Phone', 'Status'],
    rows: [['Olivia Rhye', 'Layers', 'olivia@example.com', '(555) 010-1200', 'Qualified'], ['Phoenix Baker', 'Catalog', 'phoenix@example.com', '(555) 010-1280', 'New'], ['Lana Steiner', 'Circooles', 'lana@example.com', '(555) 010-1320', 'Active'], ['Demi Wilkinson', 'Sisyphus', 'demi@example.com', '(555) 010-1380', 'Pending']],
    sideTitle: 'Pipeline summary',
    sideItems: [['New leads', '186'], ['Qualified', '94'], ['In negotiation', '38']],
    chart: 'Lead pipeline', type: 'pipeline'
  },
  Ecommerce: {
    description: 'Monitor store performance, orders, and product activity.',
    action: 'Add product',
    metrics: [['$48,290', 'Total sales', '+18.2%'], ['1,284', 'Orders', '+8.4%'], ['326', 'Products', '12 low stock'], ['4.8%', 'Refund rate', '-0.6%']],
    tableTitle: 'Recent orders',
    columns: ['Order', 'Customer', 'Date', 'Amount', 'Status'],
    rows: [['#ORD-2408', 'Olivia Rhye', 'Oct 30, 2026', '$284.00', 'Paid'], ['#ORD-2407', 'Phoenix Baker', 'Oct 29, 2026', '$126.50', 'Processing'], ['#ORD-2406', 'Lana Steiner', 'Oct 28, 2026', '$92.00', 'Shipped'], ['#ORD-2405', 'Demi Wilkinson', 'Oct 27, 2026', '$418.00', 'Paid']],
    sideTitle: 'Store summary',
    sideItems: [['Open orders', '42'], ['Products in stock', '314'], ['Returns to review', '8']],
    chart: 'Order fulfillment', type: 'commerce'
  },
  Crypto: {
    description: 'A sample overview of digital assets and portfolio activity.',
    action: 'Add asset',
    metrics: [['$84,620', 'Portfolio value', '+8.4%'], ['12', 'Assets held', 'Across 4 chains'], ['$6,284', '24h volume', '+12.1%'], ['3', 'Watchlist alerts', 'Updated today']],
    tableTitle: 'Portfolio assets',
    columns: ['Asset', 'Symbol', 'Holdings', 'Price', 'Change'],
    rows: [['Bitcoin', 'BTC', '0.82 BTC', '$67,240', '+2.8%'], ['Ethereum', 'ETH', '4.20 ETH', '$3,482', '+1.6%'], ['Solana', 'SOL', '18.50 SOL', '$172', '-0.8%'], ['Polygon', 'MATIC', '420 MATIC', '$0.72', '+4.2%']],
    sideTitle: 'Portfolio summary',
    sideItems: [['Total assets', '12'], ['Top performer', 'Solana'], ['Watchlist', '6 assets']],
    chart: 'Asset allocation', type: 'portfolio'
  },
  Jobs: {
    description: 'Track open roles, candidates, and hiring progress.',
    action: 'Post a job',
    metrics: [['18', 'Open positions', '+3 this month'], ['246', 'Candidates', '+16.8%'], ['42', 'Interviews', 'This week'], ['8', 'Offers sent', 'Awaiting response']],
    tableTitle: 'Recent candidates',
    columns: ['Candidate', 'Position', 'Applied', 'Stage', 'Status'],
    rows: [['Olivia Rhye', 'Product Designer', 'Oct 30, 2026', 'Interview', 'Active'], ['Phoenix Baker', 'Frontend Developer', 'Oct 29, 2026', 'Review', 'Pending'], ['Lana Steiner', 'Product Manager', 'Oct 28, 2026', 'Offer', 'Qualified'], ['Demi Wilkinson', 'Marketing Lead', 'Oct 27, 2026', 'Screening', 'New']],
    sideTitle: 'Hiring overview',
    sideItems: [['Applications', '246'], ['Interviews this week', '42'], ['Open positions', '18']],
    chart: 'Hiring pipeline', type: 'recruiting'
  },
  NFT: {
    description: 'Explore a demo portfolio of digital collectibles.',
    action: 'Add collectible',
    metrics: [['128', 'Items collected', '+8 this month'], ['24', 'Collections', 'Across 6 networks'], ['3.8 ETH', 'Floor value', '+6.2%'], ['6', 'Offers received', '2 new today']],
    tableTitle: 'Recent collectibles',
    columns: ['Item', 'Collection', 'Price', 'Updated', 'Status'],
    rows: [['Neon Horizon #204', 'Nexora Worlds', '1.8 ETH', '2 hours ago', 'Owned'], ['Pixel Garden #091', 'Garden Club', '0.6 ETH', 'Yesterday', 'Listed'], ['Orbit 08', 'Orbital', '2.4 ETH', 'Oct 28, 2026', 'Owned'], ['Golden Hour #17', 'Sunset Society', '1.2 ETH', 'Oct 27, 2026', 'Offer']],
    sideTitle: 'Collection overview',
    sideItems: [['Top collection', 'Nexora Worlds'], ['Items listed', '6 of 128'], ['Offers received', '3 active']],
    chart: 'Collection activity', type: 'collectibles'
  },
  Sales: {
    description: 'Review pipeline health, revenue targets, and recent deals.',
    action: 'Add deal',
    metrics: [['$284k', 'Pipeline value', '+14.6%'], ['42', 'Open deals', '+6 this month'], ['68%', 'Win rate', '+2.4%'], ['$42k', 'Average deal', 'This quarter']],
    tableTitle: 'Sales pipeline',
    columns: ['Deal', 'Company', 'Owner', 'Value', 'Stage'],
    rows: [['Website redesign', 'Layers', 'Olivia Rhye', '$24,000', 'Negotiation'], ['Mobile app', 'Catalog', 'Phoenix Baker', '$18,500', 'Proposal'], ['Brand refresh', 'Circooles', 'Lana Steiner', '$12,800', 'Qualified'], ['Data platform', 'Sisyphus', 'Demi Wilkinson', '$31,200', 'New']],
    sideTitle: 'Pipeline summary',
    sideItems: [['Qualified', '$86,400'], ['Proposal', '$124,000'], ['Negotiation', '$73,600']],
    chart: 'Revenue targets', type: 'sales'
  },
  Analytics: {
    description: 'Understand trends across acquisition, engagement, and revenue.',
    action: 'Create report',
    metrics: [['84.6k', 'Visitors', '↑ 18.4%'], ['12.8%', 'Conversion rate', '↑ 1.2%'], ['4m 32s', 'Avg. session', '↑ 8.6%'], ['$6.42', 'Revenue / visitor', 'This month']],
    tableTitle: 'Top pages',
    columns: ['Page', 'Visitors', 'Bounce rate', 'Avg. time', 'Trend'],
    rows: [['/overview', '18,420', '24.6%', '3m 42s', '+12.4%'], ['/products', '12,860', '32.1%', '2m 18s', '+8.6%'], ['/pricing', '8,240', '18.4%', '4m 06s', '+16.2%'], ['/resources', '6,180', '36.8%', '1m 52s', '-2.4%']],
    sideTitle: 'Traffic sources',
    sideItems: [['Organic search', '42.8%'], ['Direct', '28.4%'], ['Social', '18.6%']],
    chart: 'Visitor trends', type: 'analytics'
  },
  Projects: {
    description: 'Coordinate project timelines, teams, and delivery milestones.',
    action: 'Create project',
    metrics: [['24', 'Active projects', '+4 this month'], ['86%', 'On-time delivery', '+6.2%'], ['12', 'Due this week', 'Across 8 teams'], ['8', 'At risk', 'Needs attention']],
    tableTitle: 'Recent projects',
    columns: ['Project', 'Owner', 'Due date', 'Progress', 'Status'],
    rows: [['Website redesign', 'Olivia Rhye', 'Nov 18, 2026', '78%', 'On track'], ['Mobile app', 'Phoenix Baker', 'Nov 24, 2026', '54%', 'In progress'], ['Brand refresh', 'Lana Steiner', 'Dec 02, 2026', '32%', 'At risk'], ['Data platform', 'Demi Wilkinson', 'Dec 12, 2026', '18%', 'New']],
    sideTitle: 'Project health',
    sideItems: [['On track', '16 projects'], ['In progress', '6 projects'], ['At risk', '2 projects']],
    chart: 'Project delivery', type: 'projects'
  },
  HRM: {
    description: 'A sample view of team members, attendance, and people operations.',
    action: 'Add employee',
    metrics: [['248', 'Team members', '+12 this month'], ['96.4%', 'Attendance', 'This month'], ['14', 'Open positions', 'Across 6 teams'], ['8.2', 'Avg. satisfaction', 'Out of 10']],
    tableTitle: 'Team directory',
    columns: ['Name', 'Department', 'Role', 'Location', 'Status'],
    rows: [['Olivia Rhye', 'Design', 'Product Designer', 'New York', 'Active'], ['Phoenix Baker', 'Engineering', 'Frontend Developer', 'Remote', 'Active'], ['Lana Steiner', 'Product', 'Product Manager', 'London', 'On leave'], ['Demi Wilkinson', 'Marketing', 'Marketing Lead', 'Remote', 'Active']],
    sideTitle: 'People overview',
    sideItems: [['Full time', '214'], ['Open positions', '14'], ['Upcoming reviews', '22']],
    chart: 'People overview', type: 'people'
  },
  Stocks: {
    description: 'A sample watchlist and portfolio performance overview.',
    action: 'Add stock',
    metrics: [['$124,820', 'Portfolio value', '+5.8%'], ['$8,420', 'Today’s return', '+1.4%'], ['18', 'Stocks held', 'Across 5 sectors'], ['4', 'Price alerts', '2 triggered']],
    tableTitle: 'Watchlist',
    columns: ['Company', 'Symbol', 'Price', 'Change', 'Shares'],
    rows: [['Apple Inc.', 'AAPL', '$232.15', '+1.8%', '42'], ['Microsoft', 'MSFT', '$425.32', '+0.9%', '28'], ['NVIDIA', 'NVDA', '$138.85', '+2.4%', '56'], ['Amazon', 'AMZN', '$198.72', '-0.4%', '34']],
    sideTitle: 'Market overview',
    sideItems: [['S&P 500', '+0.84%'], ['NASDAQ', '+1.12%'], ['Dow Jones', '+0.46%']],
    chart: 'Market snapshot', type: 'stocks'
  },
  Coursee: {
    description: 'Manage course content, enrollment, and learner progress.',
    action: 'Create course',
    metrics: [['42', 'Published courses', '+4 this month'], ['1,284', 'Active learners', '+12.8%'], ['86%', 'Completion rate', '+3.4%'], ['18', 'Draft courses', 'In progress']],
    tableTitle: 'Recent courses',
    columns: ['Course', 'Instructor', 'Students', 'Updated', 'Status'],
    rows: [['Product Design Basics', 'Olivia Rhye', '248', 'Oct 30, 2026', 'Published'], ['Frontend Fundamentals', 'Phoenix Baker', '186', 'Oct 29, 2026', 'Published'], ['Project Planning', 'Lana Steiner', '124', 'Oct 28, 2026', 'Draft'], ['Growth Marketing', 'Demi Wilkinson', '98', 'Oct 27, 2026', 'Published']],
    sideTitle: 'Learning summary',
    sideItems: [['Active learners', '1,284'], ['Courses in progress', '18'], ['Certificates issued', '86']],
    chart: 'Learning paths', type: 'learning'
  },
  Personal: {
    description: 'A personal workspace for priorities, notes, and reminders.',
    action: 'Add task',
    metrics: [['8', 'Tasks today', '3 completed'], ['4', 'Upcoming', 'This week'], ['12', 'Notes', 'Updated recently'], ['86%', 'Weekly progress', '+8%']],
    tableTitle: 'My priorities',
    columns: ['Task', 'Project', 'Due', 'Priority', 'Status'],
    rows: [['Review product brief', 'Website redesign', 'Today', 'High', 'In progress'], ['Prepare team update', 'Operations', 'Tomorrow', 'Medium', 'Pending'], ['Share design concepts', 'Brand refresh', 'Nov 06, 2026', 'High', 'New'], ['Update project notes', 'Mobile app', 'Nov 08, 2026', 'Low', 'Completed']],
    sideTitle: 'Personal summary',
    sideItems: [['Tasks completed', '3 today'], ['Upcoming reminders', '4'], ['Notes updated', '2 this week']],
    chart: 'Today’s focus', type: 'personal'
  },
  Pages: {
    description: 'Review and organize the pages in your workspace.',
    action: 'Create page',
    metrics: [['24', 'Total pages', '+3 this month'], ['18', 'Published', '75% of pages'], ['4', 'Drafts', 'Need review'], ['2', 'Archived', 'Last 30 days']],
    tableTitle: 'Workspace pages',
    columns: ['Page', 'Owner', 'Last updated', 'Visibility', 'Status'],
    rows: [['Getting started', 'Olivia Rhye', 'Oct 30, 2026', 'Workspace', 'Published'], ['Product roadmap', 'Phoenix Baker', 'Oct 29, 2026', 'Team', 'Published'], ['Meeting notes', 'Lana Steiner', 'Oct 28, 2026', 'Private', 'Draft'], ['Design guidelines', 'Demi Wilkinson', 'Oct 27, 2026', 'Workspace', 'Published']],
    sideTitle: 'Page overview',
    sideItems: [['Published pages', '18'], ['Awaiting review', '4'], ['Recently updated', '6']],
    chart: 'Workspace library', type: 'pages'
  },
  Task: {
    description: 'Plan work, assign owners, and track progress across your team.',
    action: 'Create task',
    metrics: [['128', 'Total tasks', '+18 this week'], ['84', 'Completed', '65.6%'], ['32', 'In progress', 'Across 8 projects'], ['12', 'Overdue', 'Needs attention']],
    tableTitle: 'Task board',
    columns: ['Task', 'Assignee', 'Project', 'Due date', 'Status'],
    rows: [['Review product brief', 'Olivia Rhye', 'Website redesign', 'Nov 04, 2026', 'In progress'], ['Prepare sprint plan', 'Phoenix Baker', 'Mobile app', 'Nov 05, 2026', 'Pending'], ['Approve brand concepts', 'Lana Steiner', 'Brand refresh', 'Nov 06, 2026', 'Review'], ['Publish release notes', 'Demi Wilkinson', 'Platform', 'Nov 08, 2026', 'Completed']],
    sideTitle: 'Task summary',
    sideItems: [['To do', '24 tasks'], ['In progress', '32 tasks'], ['Completed', '84 tasks']],
    chart: 'Task board', type: 'kanban'
  },
  Authentication: {
    description: 'Preview account access and identity interface patterns.',
    action: 'Add account',
    metrics: [['2,408', 'Demo accounts', 'Sample only'], ['98.6%', 'Sign-in success', 'Illustrative'], ['2', 'Access methods', 'Email · SSO'], ['0', 'Security alerts', 'Demo status']],
    tableTitle: 'Recent sign-ins',
    columns: ['User', 'Method', 'Time', 'Device', 'Status'],
    rows: [['Json Taylor', 'Email', 'Today, 10:14 AM', 'Chrome · macOS', 'Successful'], ['Olivia Rhye', 'Single sign-on', 'Today, 9:46 AM', 'Safari · iOS', 'Successful'], ['Phoenix Baker', 'Email', 'Yesterday', 'Chrome · Windows', 'Successful'], ['Lana Steiner', 'Single sign-on', 'Oct 29, 2026', 'Firefox · Linux', 'Successful']],
    sideTitle: 'Access methods',
    sideItems: [['Email sign-in', 'Available'], ['Single sign-on', 'Available'], ['Two-step verification', 'UI preview']],
    chart: 'Access controls', type: 'security'
  },
  Error: {
    description: 'Preview the branded empty, unavailable, and error states.',
    action: 'Create error page',
    metrics: [['4', 'Page templates', 'Available'], ['3', 'Error states', 'Preview only'], ['12', 'Recent events', 'Sample data'], ['100%', 'Status', 'UI ready']],
    tableTitle: 'Error page templates',
    columns: ['Template', 'Page type', 'Last updated', 'Owner', 'Status'],
    rows: [['Page not found', '404', 'Oct 30, 2026', 'Olivia Rhye', 'Published'], ['Access denied', '403', 'Oct 28, 2026', 'Phoenix Baker', 'Published'], ['Server unavailable', '500', 'Oct 26, 2026', 'Lana Steiner', 'Draft'], ['Maintenance', '503', 'Oct 24, 2026', 'Demi Wilkinson', 'Published']],
    sideTitle: 'Error overview',
    sideItems: [['Published templates', '3'], ['Draft templates', '1'], ['Last reviewed', 'Oct 30']],
    chart: 'Error state preview', type: 'errors'
  },
  Calendar: {
    description: 'Plan meetings, events, and milestones across your workspace.',
    action: 'Add event',
    metrics: [['18', 'Upcoming events', 'This month'], ['6', 'Meetings today', 'Across 3 teams'], ['4', 'Reminders', 'This week'], ['2', 'Conflicts', 'Need review']],
    tableTitle: 'Upcoming events',
    columns: ['Event', 'Calendar', 'Date', 'Time', 'Status'],
    rows: [['Product review', 'Design team', 'Nov 04, 2026', '10:00 AM', 'Confirmed'], ['Weekly planning', 'Operations', 'Nov 05, 2026', '9:30 AM', 'Scheduled'], ['Design workshop', 'Product team', 'Nov 06, 2026', '1:00 PM', 'Confirmed'], ['Quarterly review', 'Leadership', 'Nov 10, 2026', '11:00 AM', 'Pending']],
    sideTitle: 'Calendar overview',
    sideItems: [['Today', '6 events'], ['This week', '18 events'], ['Shared calendars', '4 active']],
    chart: 'November 2026', type: 'calendar'
  },
  Email: {
    description: 'Review messages, organize conversations, and track important updates.',
    action: 'Compose email',
    metrics: [['248', 'Total messages', '+18 today'], ['12', 'Unread', 'Needs attention'], ['86', 'Sent this week', '+12.4%'], ['4', 'Drafts', 'Not sent']],
    tableTitle: 'Recent messages',
    columns: ['Sender', 'Subject', 'Received', 'Folder', 'Status'],
    rows: [['Olivia Rhye', 'Project update', '10:14 AM', 'Inbox', 'Unread'], ['Phoenix Baker', 'Design review notes', '9:46 AM', 'Inbox', 'Read'], ['Lana Steiner', 'Weekly report', 'Yesterday', 'Work', 'Read'], ['Demi Wilkinson', 'Meeting follow-up', 'Oct 29, 2026', 'Inbox', 'Unread']],
    sideTitle: 'Mailbox summary',
    sideItems: [['Inbox', '12 unread'], ['Sent', '86 this week'], ['Drafts', '4 messages']],
    chart: 'Inbox activity', type: 'inbox'
  },
  Chat: {
    description: 'Keep up with team conversations and recent messages.',
    action: 'Start conversation',
    metrics: [['18', 'Conversations', '+4 this week'], ['6', 'Unread messages', 'Across 3 chats'], ['8', 'Team members', 'Online now'], ['3', 'Pinned messages', 'Quick access']],
    tableTitle: 'Recent conversations',
    columns: ['Conversation', 'Members', 'Last message', 'Updated', 'Status'],
    rows: [['Design team', '8 members', 'Updated the latest mockups', '2 min ago', 'Active'], ['Project launch', '5 members', 'Review the launch checklist', '18 min ago', 'Unread'], ['Olivia Rhye', 'Direct message', 'Thanks for sharing!', '1 hour ago', 'Active'], ['Product updates', '12 members', 'New roadmap is ready', 'Yesterday', 'Unread']],
    sideTitle: 'Chat overview',
    sideItems: [['Unread messages', '6'], ['Active conversations', '18'], ['Online teammates', '8']],
    chart: 'Conversation activity', type: 'chat'
  },
  'File Manager': {
    description: 'Browse shared files and keep workspace documents organized.',
    action: 'Upload file',
    metrics: [['248', 'Total files', '+18 this month'], ['18.4 GB', 'Storage used', 'Of 100 GB'], ['12', 'Shared with me', 'Updated recently'], ['8', 'Folders', 'Across 4 teams']],
    tableTitle: 'Recent files',
    columns: ['File', 'Owner', 'Location', 'Modified', 'Type'],
    rows: [['Product brief.pdf', 'Olivia Rhye', 'Projects', 'Oct 30, 2026', 'PDF'], ['Design system.fig', 'Phoenix Baker', 'Design', 'Oct 29, 2026', 'Design'], ['Quarterly report.xlsx', 'Lana Steiner', 'Reports', 'Oct 28, 2026', 'Spreadsheet'], ['Launch assets.zip', 'Demi Wilkinson', 'Marketing', 'Oct 27, 2026', 'Archive']],
    sideTitle: 'Storage overview',
    sideItems: [['Documents', '124 files'], ['Images', '86 files'], ['Shared folders', '8 folders']],
    chart: 'Shared files', type: 'files'
  },
  'UI Elements': {
    description: 'Browse interface components and reusable design patterns.',
    action: 'Add component',
    metrics: [['48', 'Components', 'Across 8 groups'], ['12', 'New this month', 'Recently added'], ['6', 'In review', 'Awaiting approval'], ['94%', 'Coverage', 'Design system']],
    tableTitle: 'Component library',
    columns: ['Component', 'Category', 'Variants', 'Updated', 'Status'],
    rows: [['Buttons', 'Actions', '8 variants', 'Oct 30, 2026', 'Published'], ['Form fields', 'Forms', '12 variants', 'Oct 29, 2026', 'Published'], ['Navigation', 'Layout', '6 variants', 'Oct 28, 2026', 'Review'], ['Notifications', 'Feedback', '5 variants', 'Oct 27, 2026', 'Published']],
    sideTitle: 'Component summary',
    sideItems: [['Published', '42 components'], ['In review', '6 components'], ['Categories', '8 groups']],
    chart: 'Component preview', type: 'components'
  },
  Utilities: {
    description: 'Explore utility patterns for common workspace tasks.',
    action: 'Add utility',
    metrics: [['32', 'Utilities', 'Across 6 groups'], ['24', 'Available', 'Ready to use'], ['4', 'Recently updated', 'This month'], ['4', 'In review', 'Awaiting approval']],
    tableTitle: 'Utility library',
    columns: ['Utility', 'Category', 'Usage', 'Updated', 'Status'],
    rows: [['Date formatting', 'Formatting', '1,284 uses', 'Oct 30, 2026', 'Active'], ['File uploader', 'Files', '824 uses', 'Oct 29, 2026', 'Active'], ['Keyboard shortcuts', 'Navigation', '612 uses', 'Oct 28, 2026', 'Review'], ['Empty states', 'Feedback', '428 uses', 'Oct 27, 2026', 'Active']],
    sideTitle: 'Utility overview',
    sideItems: [['Active utilities', '24'], ['Categories', '6'], ['In review', '4']],
    chart: 'Workspace preferences', type: 'utilities'
  },
  Charts: {
    description: 'Review chart types and data visualization examples.',
    action: 'Create chart',
    metrics: [['18', 'Chart types', 'Across 4 groups'], ['12', 'In use', 'Active dashboards'], ['4', 'Recently added', 'This month'], ['2', 'Drafts', 'Needs review']],
    tableTitle: 'Chart library',
    columns: ['Chart', 'Category', 'Data points', 'Updated', 'Status'],
    rows: [['Revenue overview', 'Area', '12 months', 'Oct 30, 2026', 'Published'], ['Lead sources', 'Donut', '4 sources', 'Oct 29, 2026', 'Published'], ['Task progress', 'Bar', '8 projects', 'Oct 28, 2026', 'Review'], ['Team growth', 'Line', '12 months', 'Oct 27, 2026', 'Published']],
    sideTitle: 'Chart summary',
    sideItems: [['Published charts', '12'], ['Draft charts', '2'], ['Chart categories', '4']],
    chart: 'Visualization gallery', type: 'charts'
  },
  Forms: {
    description: 'Manage forms, fields, and submission settings.',
    action: 'Create form',
    metrics: [['24', 'Total forms', '+3 this month'], ['18', 'Published', '75% of forms'], ['486', 'Submissions', '+14.2%'], ['4', 'Drafts', 'Needs review']],
    tableTitle: 'Recent forms',
    columns: ['Form', 'Owner', 'Submissions', 'Updated', 'Status'],
    rows: [['Contact form', 'Olivia Rhye', '128', 'Oct 30, 2026', 'Published'], ['Event registration', 'Phoenix Baker', '86', 'Oct 29, 2026', 'Published'], ['Feedback survey', 'Lana Steiner', '64', 'Oct 28, 2026', 'Draft'], ['Newsletter signup', 'Demi Wilkinson', '42', 'Oct 27, 2026', 'Published']],
    sideTitle: 'Form summary',
    sideItems: [['Published forms', '18'], ['Submissions this week', '86'], ['Awaiting review', '4']],
    chart: 'Form builder', type: 'forms'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || ''}</svg>`;
const safeText = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

function showToast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.hidden = false;
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => { element.hidden = true; }, 2400);
}

function renderActivities(showAll) {
  $('#activityList').innerHTML = (showAll ? activities : activities.slice(0, 5)).map((item) =>
    `<li class="activity-item"><strong>${safeText(item.title)}</strong><time>${safeText(item.time)}</time>${item.detail ? `<p>${safeText(item.detail)}</p>` : ''}</li>`
  ).join('');
  $('#showMore').textContent = showAll ? 'Show Less' : 'Show More';
  $('#showMore').setAttribute('aria-expanded', String(showAll));
}

let sortAscending = null;
let tableQuery = '';

function renderDeals() {
  const filtered = deals.filter((deal) => [deal.name, deal.category, deal.email, deal.location, deal.date, deal.amount].join(' ').toLowerCase().includes(tableQuery.toLowerCase()));
  const sorted = sortAscending === null ? filtered : [...filtered].sort((a, b) => sortAscending ? a.amount - b.amount : b.amount - a.amount);
  $('#dealsTableBody').innerHTML = sorted.map((deal, index) => `
    <tr>
      <td><input type="checkbox" class="row-select" aria-label="Select ${safeText(deal.name)}"></td>
      <td><span class="rep-cell"><span class="avatar" style="background:${['#9b634c', '#384d5a', '#222e37', '#be8064', '#6f8594'][index % 5]}">${safeText(deal.initials)}</span>${safeText(deal.name)}</span></td>
      <td>${safeText(deal.category)}</td><td>${safeText(deal.email)}</td>
      <td><span class="location-badge ${deal.location === 'Central City' ? 'green' : ''}">${safeText(deal.location)}</span></td>
      <td>${safeText(deal.date)}</td><td><strong>${deal.amount.toLocaleString('en-US')}</strong></td>
      <td><span class="row-actions"><button type="button" data-action="view" aria-label="View ${safeText(deal.name)}">${icon('eye')}</button><button type="button" data-action="edit" aria-label="Edit ${safeText(deal.name)}">${icon('edit')}</button></span></td>
    </tr>`).join('');
  $('#entryCount').textContent = tableQuery ? `Showing ${sorted.length} of ${deals.length} Entries` : `Showing ${deals.length} Entries`;
  $('#selectAll').checked = false;
  $('#selectAll').indeterminate = false;
}

$$('[data-icon]').forEach((element) => { element.innerHTML = icon(element.dataset.icon); });
$('#topDealsList').innerHTML = topDeals.map((deal) => `
  <div class="deal-person"><span class="avatar" style="background:${deal.color}">${safeText(deal.initials)}</span>
  <span class="deal-person-copy"><strong>${safeText(deal.name)}</strong><small>${safeText(deal.email)}</small></span><strong class="amount">${safeText(deal.amount)}</strong></div>`).join('');

$('#statsGrid').innerHTML = statistics.map((stat) => `
  <article class="stat-card"><span class="stat-icon">${icon(stat.icon)}</span><span class="stat-label">${safeText(stat.title)}</span><strong class="stat-value">${safeText(stat.value)}</strong>
  <svg class="sparkline" viewBox="0 0 82 18" preserveAspectRatio="none" aria-hidden="true"><path d="${stat.path}"/></svg>
  <div class="stat-bottom"><button class="view-all" type="button" data-view="${safeText(stat.title)}">View All <span>→</span></button><span class="trend ${stat.trend.startsWith('-') ? 'negative' : ''}"><strong>${safeText(stat.trend)}</strong><small>This month</small></span></div></article>`).join('');
$('#profitBars').innerHTML = [62, 53, 78, 100, 79, 74, 88].map((height, index) => `<div class="profit-bar" style="height:${height}%"><span>${'SMTWTFS'[index]}</span></div>`).join('');
$('#sourceLegend').innerHTML = sources.map((source) => `<div class="source-item"><span><i></i>${safeText(source.name)}</span><strong>${safeText(source.value)}</strong></div>`).join('');
$('#dealStatusList').innerHTML = dealStatuses.map((status) => `<div class="deal-status-row"><i></i><span>${safeText(status.label)}</span><span>${safeText(status.value)}</span></div>`).join('');
renderActivities(false);
renderDeals();

let activeAdminPage = 'Dashboards';
let pageSearchQuery = '';
let activePageTab = 'Overview';

function renderPageMetrics(config) {
  $('#pageMetrics').innerHTML = config.metrics.map((metric, index) => `
    <article class="page-metric"><span class="page-metric-icon">${['↗', '▤', '◷', '◇'][index]}</span>
      <strong>${safeText(metric[0])}</strong><small>${safeText(metric[1])} · ${safeText(metric[2])}</small></article>`).join('');
}

function statusClass(value) {
  const normalized = value.toLowerCase().replace(/\s+/g, '-');
  if (['active', 'qualified', 'published', 'paid', 'successful', 'owned', 'on-track', 'available', 'ready', 'completed'].includes(normalized)) return 'success';
  if (['new', 'pending', 'review', 'draft', 'scheduled', 'offer', 'to-do', 'at-risk'].includes(normalized)) return 'pending';
  if (['processing', 'shipped', 'in-progress', 'negotiation', 'proposal'].includes(normalized)) return 'progress';
  if (['closed', 'inactive', 'archived'].includes(normalized)) return 'closed';
  return '';
}

function renderPageTable(config) {
  const rows = config.rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => row.join(' ').toLowerCase().includes(pageSearchQuery.toLowerCase()));
  const body = rows.length
    ? rows.map(({ row, index }) => `<tr data-page-row="${index}">${row.map((cell, cellIndex) => {
      const lastColumn = cellIndex === row.length - 1;
      const isStatus = lastColumn && statusClass(cell);
      if (isStatus) return `<td><span class="page-table-status ${statusClass(cell)}">${safeText(cell)}</span></td>`;
      if (lastColumn && ['Preview', 'Open', 'Enabled'].includes(cell)) return `<td><div class="page-table-actions"><button type="button" data-page-row-action="${index}">${safeText(cell)}</button></div></td>`;
      if (cellIndex === 0) return `<td><strong>${safeText(cell)}</strong></td>`;
      return `<td>${safeText(cell)}</td>`;
    }).join('')}</tr>`).join('')
    : `<tr><td class="page-table-empty" colspan="${config.columns.length}">No ${safeText(config.tableTitle.toLowerCase())} match “${safeText(pageSearchQuery)}”.</td></tr>`;

  return `<div class="page-main-card" id="pageTableCard">
    <div class="page-card-heading"><div><h2>${safeText(config.tableTitle)}</h2><p>${rows.length} ${rows.length === 1 ? 'record' : 'records'} · Demo data</p></div>
      <div class="page-card-heading-actions"><label class="page-filter">${icon('search')}<input id="pageSearch" type="search" value="${safeText(pageSearchQuery)}" placeholder="Search..." aria-label="Search ${safeText(config.tableTitle)}"></label><button class="page-quiet-button" type="button" data-page-export>Export</button></div></div>
    <div class="page-table-wrap"><table class="page-table"><thead><tr>${config.columns.map((column) => `<th scope="col">${safeText(column)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>
    <div class="page-pagination"><span>Showing ${rows.length} of ${config.rows.length} records</span><div><button type="button" disabled>Previous</button> <button type="button" disabled>Next</button></div></div>
  </div>`;
}

function renderCalendarPreview(config) {
  const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = ['26', '27', '28', '29', '30', '31', ...Array.from({ length: 30 }, (_, index) => String(index + 1)), '1', '2', '3', '4', '5', '6'];
  const dayCells = days.map((day, index) => {
    const muted = index < 6 || index > 35;
    const hasEvent = ['4', '5', '6', '10', '12', '18'].includes(day) && !muted;
    return `<div class="calendar-day${muted ? ' muted' : ''}${hasEvent ? ' has-event' : ''}">${day}</div>`;
  }).join('');
  const agenda = config.rows.slice(0, 3).map((row) =>
    `<div class="setting-row"><span><strong>${safeText(row[0])}</strong><small>${safeText(row[2])} · ${safeText(row[3])}</small></span><span class="page-table-status ${statusClass(row[4])}">${safeText(row[4])}</span></div>`
  ).join('');
  return `<section class="page-widget-card page-calendar"><div class="calendar-toolbar"><button class="page-quiet-button" type="button" data-calendar-step="-1" aria-label="Previous month">&lt;</button><strong>${safeText(config.chart)}</strong><button class="page-quiet-button" type="button" data-calendar-step="1" aria-label="Next month">&gt;</button></div><div class="calendar-grid">${names.map((name) => `<div class="calendar-day muted">${name}</div>`).join('')}${dayCells}</div><div class="page-settings">${agenda}</div></section>`;
}

function renderPanelWidget(title, items, className = '') {
  return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>${safeText(title)}</h2><p>Curated workspace overview</p></div></div><div class="page-panel-grid ${className}">${items.map(([heading, detail]) =>
    `<article class="page-panel-tile"><strong>${safeText(heading)}</strong><p>${safeText(detail)}</p></article>`
  ).join('')}</div></section>`;
}

function renderKanbanWidget(config) {
  const groupSets = {
    recruiting: [['Screening', /screen|new/i], ['Interview', /interview|review/i], ['Offer', /offer|qualified/i]],
    projects: [['On track', /on track/i], ['In progress', /progress/i], ['At risk', /risk|new/i]],
    sales: [['Qualified', /qualified|new/i], ['Proposal', /proposal/i], ['Negotiation', /negotiation/i]],
    kanban: [['To do', /pending|review|new/i], ['In progress', /progress/i], ['Done', /complete/i]]
  };
  const stageIndex = config.type === 'recruiting' ? 3 : config.type === 'sales' || config.type === 'kanban' ? config.rows[0].length - 1 : config.rows[0].length - 1;
  const groups = (groupSets[config.type] || groupSets.kanban).map(([title, pattern]) => ({
    title,
    rows: config.rows.filter((row) => pattern.test(row[stageIndex]))
  }));
  return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>${safeText(config.chart)}</h2><p>${config.rows.length} items across the current workflow</p></div><button class="page-quiet-button" type="button" data-demo-action="Board filter">Filter</button></div><div class="page-kanban">${groups.map((group) =>
    `<section class="kanban-column"><h3 class="kanban-heading">${group.title}<span>${group.rows.length}</span></h3>${group.rows.map((row) =>
      `<article class="kanban-card"><strong>${safeText(row[0])}</strong><small>${safeText(row.slice(1, -1).join(' · '))}</small></article>`
    ).join('') || '<p class="page-empty-state">Nothing queued</p>'}</section>`
  ).join('')}</div></section>`;
}

function renderInboxPreview(config) {
  const messages = config.rows.map((row, index) =>
    `<button class="inbox-item${index === 0 ? ' active' : ''}" type="button" data-inbox-item="${index}"><strong>${safeText(row[0])}</strong><small>${safeText(row[1])} · ${safeText(row[2])}</small></button>`
  ).join('');
  const first = config.rows[0];
  return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Inbox</h2><p>12 unread · sorted by newest</p></div><button class="page-quiet-button" type="button" data-demo-action="Compose email">Compose</button></div><div class="page-inbox"><div class="inbox-list">${messages}</div><article class="inbox-message" id="inboxMessage"><h3>${safeText(first[1])}</h3><small>${safeText(first[0])} · ${safeText(first[2])}</small><p>Hi team,<br><br>Here is the latest update. Please review the notes and share any feedback before our next check-in.</p><button class="page-quiet-button" type="button" data-demo-action="Reply">Reply</button></article></div></section>`;
}

function renderChatPreview(config) {
  const people = config.rows.map((row, index) =>
    `<button class="chat-person${index === 0 ? ' active' : ''}" type="button" data-chat-person="${index}"><span class="chat-avatar">${safeText(row[0].split(/\s+/).map((part) => part[0]).join('').slice(0, 2))}</span><span><strong>${safeText(row[0])}</strong><small>${safeText(row[3])}</small></span></button>`
  ).join('');
  return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Team chat</h2><p>4 active conversations · 8 teammates online</p></div><button class="page-quiet-button" type="button" data-demo-action="Start conversation">New chat</button></div><div class="chat-layout"><div class="chat-people">${people}</div><div class="chat-thread"><div class="chat-thread-heading" id="chatThreadHeading">${safeText(config.rows[0][0])}</div><div class="chat-bubble">${safeText(config.rows[0][2])}</div><div class="chat-bubble sent">Thanks, I’ll take a look and share an update shortly.</div><form class="chat-compose" id="chatCompose"><input name="message" aria-label="Write a message" placeholder="Write a message..." required><button class="page-quiet-button" type="submit">Send</button></form></div></div></section>`;
}

function renderFilePreview(config) {
  const fileTypes = { PDF: 'PDF', Design: 'FIG', Spreadsheet: 'XLS', Archive: 'ZIP' };
  return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Recently shared</h2><p>Files your team has updated</p></div><button class="page-quiet-button" type="button" data-demo-action="Upload file">Upload file</button></div><div class="file-list">${config.rows.map((row) =>
    `<div class="file-item"><span class="file-icon">${fileTypes[row[4]] || 'FILE'}</span><span><strong>${safeText(row[0])}</strong><small>${safeText(row[1])} · ${safeText(row[2])}</small></span><time>${safeText(row[3])}</time></div>`
  ).join('')}</div></section>`;
}

function renderSpecialPreview(config) {
  const rows = config.rows;
  switch (config.type) {
    case 'calendar': return renderCalendarPreview(config);
    case 'kanban':
    case 'recruiting':
    case 'projects':
    case 'sales': return renderKanbanWidget(config);
    case 'inbox': return renderInboxPreview(config);
    case 'chat': return renderChatPreview(config);
    case 'files': return renderFilePreview(config);
    case 'pipeline':
      return renderPanelWidget('Lead stages', [['New', '42 contacts waiting for first touch'], ['Qualified', '94 active opportunities'], ['In negotiation', '38 deals being discussed'], ['Follow up today', '24 tasks due']], 'pipeline-tiles');
    case 'commerce':
      return renderPanelWidget('Fulfillment desk', [['Ready to pack', `${rows[0][0]} · ${rows[0][1]}`], ['In transit', `${rows[2][0]} · ${rows[2][1]}`], ['Needs attention', '8 orders require review'], ['Returns', '4 requests awaiting approval']]);
    case 'portfolio':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Allocation by asset</h2><p>Demo portfolio · refreshed today</p></div><button class="page-quiet-button" type="button" data-demo-action="Portfolio range">1 month</button></div><div class="page-panel-grid"><article class="page-panel-tile"><div class="page-ring"><span>12 assets</span></div><strong>Balanced allocation</strong><p>Largest holding: ${safeText(rows[0][0])}</p></article>${rows.slice(0, 3).map((row) => `<article class="page-panel-tile"><strong>${safeText(row[0])} <span>${safeText(row[1])}</span></strong><p>${safeText(row[2])} held · ${safeText(row[3])}</p></article>`).join('')}</div></section>`;
    case 'collectibles':
      return renderPanelWidget('Featured collection', rows.slice(0, 4).map((row) => [row[0], `${row[1]} · ${row[2]} · ${row[4]}`]), 'collectible-tiles');
    case 'analytics':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Visitor trends</h2><p>Sessions by day · last 7 days</p></div><button class="page-quiet-button" type="button" data-demo-action="Analytics range">Last 7 days</button></div><div class="page-chart"><div class="page-chart-bars">${[52, 68, 61, 82, 74, 94, 78].map((height) => `<i style="height:${height}%"></i>`).join('')}</div><div class="page-chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div><div class="page-panel-grid"><article class="page-panel-tile"><strong>Acquisition</strong><p>Organic search is up 18.4%</p></article><article class="page-panel-tile"><strong>Engagement</strong><p>Average session is 4m 32s</p></article></div></section>`;
    case 'people':
      return renderPanelWidget('Team at a glance', rows.slice(0, 4).map((row) => [row[0], `${row[2]} · ${row[1]} · ${row[4]}`]));
    case 'stocks':
      return renderPanelWidget('Market watch', rows.slice(0, 4).map((row) => [`${row[1]} · ${row[2]}`, `${row[0]} · ${row[3]} today`]));
    case 'learning':
      return renderPanelWidget('Continue learning', rows.slice(0, 4).map((row) => [row[0], `${row[1]} · ${row[2]} learners · ${row[4]}`]));
    case 'personal':
      return renderPanelWidget('Today’s priorities', rows.slice(0, 4).map((row) => [row[0], `${row[3]} priority · ${row[2]} · ${row[4]}`]));
    case 'pages':
      return renderPanelWidget('Quick access', rows.slice(0, 4).map((row) => [row[0], `${row[3]} · Updated ${row[2]} · ${row[4]}`]));
    case 'security':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Sign-in protection</h2><p>Recommended workspace access controls</p></div><span class="page-table-status success">Protected</span></div><div class="page-settings">${[['Two-step verification', 'Add a second check when signing in.', 'Enabled'], ['Single sign-on', 'Use your organization identity provider.', 'Available'], ['Session timeout', 'Sign out after 12 hours of inactivity.', '12 hours']].map(([title, detail, value]) => `<div class="setting-row"><span><strong>${title}</strong><small>${detail}</small></span><span class="page-table-status ${statusClass(value)}">${value}</span></div>`).join('')}</div></section>`;
    case 'errors':
      return renderPanelWidget('Preview an interface state', [['404 · Page not found', 'A helpful route back to the workspace'], ['403 · Access denied', 'Explain permissions and next steps'], ['500 · Service unavailable', 'Set expectations and offer retry'], ['503 · Maintenance', 'Show an update window and support link']]);
    case 'components':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Reusable interface patterns</h2><p>Common actions and feedback states</p></div></div><div class="page-component-preview"><button class="preview-button" type="button" data-demo-action="Primary button">Primary action</button><button class="preview-button secondary" type="button" data-demo-action="Secondary button">Secondary</button><span class="preview-chip">Approved</span><span class="preview-chip">In review</span><input class="preview-input" aria-label="Component example" placeholder="Search components"></div></section>`;
    case 'utilities':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Workspace preferences</h2><p>Personal settings and productivity aids</p></div><button class="page-quiet-button" type="button" data-demo-action="Save preferences">Save changes</button></div><div class="page-settings">${[['Keyboard shortcuts', 'Use / to focus search and Esc to dismiss dialogs.', 'Enabled'], ['Weekly digest', 'Receive a Monday summary of workspace activity.', 'Every Monday'], ['Compact date format', 'Show dates using the workspace locale.', 'Oct 31, 2026'], ['Quiet hours', 'Reduce non-critical notifications after hours.', '10 PM – 8 AM']].map(([title, detail, value]) => `<div class="setting-row"><span><strong>${title}</strong><small>${detail}</small></span><span class="page-table-status success">${value}</span></div>`).join('')}</div></section>`;
    case 'charts':
      return renderPanelWidget('Visualization gallery', [['Revenue trend', 'Area chart · Monthly performance'], ['Lead sources', 'Donut chart · Channel mix'], ['Project health', 'Bar chart · Delivery status'], ['Team growth', 'Line chart · Headcount over time']]);
    case 'forms':
      return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>Contact form · builder preview</h2><p>Preview the fields before publishing</p></div><span class="page-table-status success">Published</span></div><form class="page-form-preview" id="formPreview"><label>Full name<input name="name" placeholder="e.g. Olivia Rhye" required></label><label>Work email<input name="email" type="email" placeholder="you@company.com" required></label><label>What can we help with?<select name="topic"><option>Product question</option><option>Sales inquiry</option><option>Support request</option></select></label><button class="preview-button" type="submit">Preview submission</button></form></section>`;
    default:
      return renderPanelWidget(config.chart, rows.slice(0, 4).map((row) => [row[0], row.slice(1).join(' · ')]));
  }
}

function renderPageInsight(config) {
  const insight = {
    CRM: ['Follow-up queue', [['Due today', '24 contacts'], ['Recently qualified', '18 leads'], ['No owner assigned', '6 records']]],
    Ecommerce: ['Fulfillment alerts', [['Ready to ship', '42 orders'], ['Low stock items', '12 products'], ['Refunds to review', '8 requests']]],
    Crypto: ['Market watch', [['Top holding', 'Bitcoin · 0.82 BTC'], ['Largest mover', 'Polygon · +4.2%'], ['Alerts triggered', '3 assets']]],
    Jobs: ['Recruiter focus', [['Interviews today', '6 candidates'], ['Awaiting review', '18 applications'], ['Offers pending', '2 candidates']]],
    NFT: ['Collection insights', [['Top collection', 'Nexora Worlds'], ['Listed items', '6 of 128'], ['Offers received', '3 active']]],
    Sales: ['Next deal actions', [['Follow up', 'Website redesign'], ['Proposal due', 'Mobile app'], ['Forecast confidence', '68%']]],
    Analytics: ['Traffic sources', [['Organic search', '42.8%'], ['Direct visits', '28.4%'], ['Social referrals', '18.6%']]],
    Projects: ['Delivery risks', [['At risk', '2 projects'], ['Due this week', '12 milestones'], ['On track', '16 projects']]],
    HRM: ['People operations', [['Reviews due', '22 teammates'], ['New starters', '4 this month'], ['Open positions', '14 roles']]],
    Stocks: ['Market indices', [['S&P 500', '+0.84%'], ['NASDAQ', '+1.12%'], ['Dow Jones', '+0.46%']]],
    Coursee: ['Learner support', [['Questions to answer', '14'], ['Courses in progress', '18'], ['Certificates this week', '86']]],
    Personal: ['Coming up', [['Team update', 'Tomorrow · 9:30 AM'], ['Design review', 'Thursday · 1:00 PM'], ['Focus time', 'Friday · 10:00 AM']]],
    Pages: ['Review queue', [['Awaiting review', '4 pages'], ['Recently updated', '6 pages'], ['Private pages', '3 pages']]],
    Task: ['Workload snapshot', [['Overdue', '12 tasks'], ['Due today', '8 tasks'], ['Completed this week', '84 tasks']]],
    Authentication: ['Security checklist', [['Two-step verification', 'Recommended'], ['Unusual sign-ins', 'None detected'], ['Last access review', 'Oct 30, 2026']]],
    Error: ['Quality checklist', [['Links checked', '24 routes'], ['Broken links', '0 detected'], ['Last preview', 'Today']]],
    Calendar: ['Today’s agenda', [['Design sync', '10:00 AM · Design team'], ['Product review', '1:30 PM · Product'], ['Planning session', '3:00 PM · Operations']]],
    Email: ['Mail shortcuts', [['Unread', '12 messages'], ['Flagged', '4 messages'], ['Drafts', '4 messages']]],
    Chat: ['Team presence', [['Online now', '8 teammates'], ['Unread mentions', '3 messages'], ['Pinned updates', '3 items']]],
    'File Manager': ['Storage health', [['Used', '18.4 GB of 100 GB'], ['Shared with you', '12 files'], ['Recently changed', '8 files']]],
    'UI Elements': ['Library status', [['Published', '42 components'], ['In review', '6 components'], ['Coverage', '94%']]],
    Utilities: ['Quick preferences', [['Keyboard shortcuts', 'Enabled'], ['Weekly digest', 'Monday'], ['Quiet hours', '10 PM–8 AM']]],
    Charts: ['Chart status', [['Published', '12 charts'], ['Drafts', '2 charts'], ['Data sources', '4 connected']]],
    Forms: ['Submission overview', [['This week', '86 entries'], ['Completion rate', '72%'], ['Needs review', '4 entries']]]
  }[Object.keys(pageViews).find((name) => pageViews[name] === config)];
  const [title, items] = insight || [config.sideTitle, config.sideItems];
  return `<section class="page-side-card"><div class="page-card-heading"><div><h2>${safeText(title)}</h2><p>Useful next steps</p></div><button class="page-quiet-button" type="button" data-demo-action="${safeText(title)}">•••</button></div><ul class="page-side-list">${items.map(([label, value]) => `<li><span>${safeText(label)}</span><strong>${safeText(value)}</strong></li>`).join('')}</ul><p class="page-side-footer">Updated just now · Demo data</p></section>`;
}

function renderSpecialSupport(config) {
  if (config.type === 'analytics' || config.type === 'stocks' || config.type === 'portfolio' || config.type === 'charts') {
    const title = config.type === 'analytics' ? 'Engagement trend' : config.type === 'stocks' ? 'Portfolio movement' : config.type === 'portfolio' ? 'Allocation trend' : 'Usage over time';
    return `<section class="page-widget-card"><div class="page-card-heading"><div><h2>${title}</h2><p>Sample activity · this week</p></div></div><div class="page-chart"><div class="page-chart-bars">${[36, 58, 46, 75, 63, 91, 72].map((height) => `<i style="height:${height}%"></i>`).join('')}</div><div class="page-chart-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div></section>`;
  }
  return renderPageInsight(config);
}

function renderAdminPage(name, options = {}) {
  if (name === 'Dashboards') {
    activeAdminPage = 'Dashboards';
    $('#dashboardView').hidden = false;
    $('#adminPageView').hidden = true;
    $('#globalSearch').placeholder = 'Search anything...';
    $('#globalSearch').value = '';
    pageSearchQuery = '';
    tableQuery = '';
    renderDeals();
    return;
  }
  const config = pageViews[name];
  if (!config) return;
  activeAdminPage = name;
  if (!options.preserveSearch) pageSearchQuery = '';
  activePageTab = 'Overview';
  $('#dashboardView').hidden = true;
  $('#adminPageView').hidden = false;
  $('#globalSearch').placeholder = `Search ${name.toLowerCase()}...`;
  if (!options.preserveSearch) $('#globalSearch').value = '';
  $('#pageEyebrow').textContent = name.toUpperCase();
  $('#pageTitle').textContent = name;
  $('#pageDescription').textContent = config.description;
  $('#pagePrimaryAction').textContent = config.action;
  renderPageMetrics(config);
  $('#pageTabs').innerHTML = ['Overview', 'Records', 'Insights'].map((tab) =>
    `<button class="page-tab" type="button" role="tab" aria-selected="${tab === activePageTab}" data-page-tab="${tab}">${tab}</button>`
  ).join('');
  $('#pageLayout').innerHTML = `<div class="page-main-stack">${renderSpecialPreview(config)}${renderPageTable(config)}</div>
    <aside class="page-side-stack">
      <section class="page-side-card"><div class="page-card-heading"><div><h2>${safeText(config.sideTitle)}</h2><p>Sample workspace summary</p></div><button class="page-quiet-button" type="button" data-demo-action="View summary">•••</button></div>
        <ul class="page-side-list">${config.sideItems.map(([label, value]) => `<li><span>${safeText(label)}</span><strong>${safeText(value)}</strong></li>`).join('')}</ul><p class="page-side-footer">Updated just now · Demo data</p></section>
      ${renderSpecialSupport(config)}
    </aside>`;
  bindPageView(config);
}

function bindPageView(config) {
  bindPageTable(config);
  $$('.page-tab').forEach((tab) => tab.addEventListener('click', () => {
    activePageTab = tab.dataset.pageTab;
    $$('.page-tab').forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    if (activePageTab === 'Records') $('#pageTableCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
    else if (activePageTab === 'Insights') $('.page-side-stack').scrollIntoView({ behavior: 'smooth', block: 'center' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }));
  $$('[data-calendar-step]').forEach((button) => button.addEventListener('click', () => {
    const month = button.dataset.calendarStep === '1' ? 'December 2026' : 'October 2026';
    showToast(`${month} calendar preview`);
    $('.calendar-toolbar strong').textContent = month;
  }));
  $$('[data-demo-action]').forEach((button) => button.addEventListener('click', () => {
    showToast(`${button.dataset.demoAction} is a local UI preview.`);
  }));
  $$('[data-inbox-item]').forEach((button) => button.addEventListener('click', () => {
    const row = config.rows[Number(button.dataset.inboxItem)];
    $$('.inbox-item').forEach((item) => item.classList.toggle('active', item === button));
    $('#inboxMessage').innerHTML = `<h3>${safeText(row[1])}</h3><small>${safeText(row[0])} · ${safeText(row[2])}</small><p>Hi team,<br><br>${safeText(row[1])}. Please review the latest update and share any feedback before our next check-in.</p><button class="page-quiet-button" type="button" data-demo-action="Reply">Reply</button>`;
    $('#inboxMessage [data-demo-action]').addEventListener('click', () => showToast('Reply opened in this UI preview.'));
  }));
  $$('[data-chat-person]').forEach((button) => button.addEventListener('click', () => {
    const row = config.rows[Number(button.dataset.chatPerson)];
    $$('.chat-person').forEach((item) => item.classList.toggle('active', item === button));
    $('#chatThreadHeading').textContent = row[0];
    $('.chat-thread .chat-bubble').textContent = row[2];
  }));
  $('#chatCompose')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements.message;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent';
    bubble.textContent = input.value.trim();
    if (!bubble.textContent) return;
    $('#chatCompose').before(bubble);
    event.currentTarget.reset();
  });
  $('#formPreview')?.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Sample form submission previewed; nothing was sent.');
  });
}

function bindPageTable(config) {
  const card = $('#pageTableCard');
  if (!card) return;
  card.addEventListener('click', handlePageTableAction);
  card.querySelector('[data-page-export]')?.addEventListener('click', () => showToast('Sample export prepared in this UI preview.'));
  card.querySelector('#pageSearch')?.addEventListener('input', (event) => {
    pageSearchQuery = event.currentTarget.value;
    $('#globalSearch').value = pageSearchQuery;
    const selectionStart = event.currentTarget.selectionStart;
    const selectionEnd = event.currentTarget.selectionEnd;
    card.outerHTML = renderPageTable(config);
    bindPageTable(config);
    const search = $('#pageSearch');
    search.focus();
    search.setSelectionRange(selectionStart, selectionEnd);
  });
}

function handlePageTableAction(event) {
  const button = event.target.closest('[data-page-row-action]');
  if (!button) return;
  const config = pageViews[activeAdminPage];
  const row = config?.rows[Number(button.dataset.pageRowAction)];
  showToast(`Previewing ${row?.[0] || 'sample item'} · demo only`);
}

function openPageDemoDialog(config) {
  const dialog = $('#demoDialog');
  $('#demoDialogTitle').textContent = config.action;
  const firstColumn = config.columns[0] || 'Name';
  $('#demoDialogFields').innerHTML = `<label>${safeText(firstColumn)}<input name="name" placeholder="Enter a sample ${safeText(firstColumn.toLowerCase())}" required></label>
    <label>${safeText(config.columns[1] || 'Details')}<input name="details" placeholder="Add a short description"></label>`;
  dialog.showModal();
  $('#demoDialogForm').onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const row = config.columns.map((_, index) => index === 0 ? String(formData.get('name')).trim() : index === 1 ? String(formData.get('details') || 'Sample entry') : index === config.columns.length - 1 ? 'New' : '—');
    config.rows.unshift(row);
    dialog.close();
    pageSearchQuery = '';
    renderAdminPage(activeAdminPage);
    showToast('Added to this session’s UI preview only.');
  };
}

function closePopovers(except) {
  $$('[data-menu]').forEach((button) => {
    if (button === except) return;
    button.setAttribute('aria-expanded', 'false');
    const menu = document.getElementById(button.dataset.menu);
    if (menu) menu.hidden = true;
  });
}

$$('[data-menu]').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation();
  const menu = document.getElementById(button.dataset.menu);
  const open = menu.hidden;
  closePopovers(button);
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
}));
document.addEventListener('click', (event) => { if (!event.target.closest('.popover-wrap')) closePopovers(); });

$('#sidebarToggle').addEventListener('click', () => {
  if (window.matchMedia('(max-width: 760px)').matches) {
    const open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    $('#mobileBackdrop').hidden = !open;
    $('#sidebarToggle').setAttribute('aria-expanded', String(open));
  } else {
    const collapsed = $('.dashboard-shell').classList.toggle('sidebar-collapsed');
    $('#sidebarToggle').setAttribute('aria-expanded', String(!collapsed));
  }
});
$('#mobileBackdrop').addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  $('#mobileBackdrop').hidden = true;
  $('#sidebarToggle').setAttribute('aria-expanded', 'false');
});

$('#sideNav').addEventListener('click', (event) => {
  const button = event.target.closest('.nav-item');
  if (!button) return;
  $$('.nav-item').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  renderAdminPage(button.dataset.nav);
  if (window.matchMedia('(max-width: 760px)').matches) {
    document.body.classList.remove('nav-open');
    $('#mobileBackdrop').hidden = true;
  }
});

$('#pagePrimaryAction').addEventListener('click', () => {
  const config = pageViews[activeAdminPage];
  if (config) openPageDemoDialog(config);
});
$('#demoDialogClose').addEventListener('click', () => $('#demoDialog').close());
$('#demoDialogCancel').addEventListener('click', () => $('#demoDialog').close());

$('#themeToggle').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark-mode');
  $('#themeToggle').setAttribute('aria-label', dark ? 'Switch to light mode' : 'Toggle dark mode');
  showToast(dark ? 'Dark theme enabled' : 'Light theme enabled');
});
$('#languageMenu').addEventListener('click', (event) => {
  const option = event.target.closest('button');
  if (!option) return;
  const [flag, language] = option.textContent.trim().split(/\s+/);
  const button = $('.language-button');
  button.querySelector('.flag').textContent = flag;
  button.querySelector('span:nth-child(2)').textContent = language === 'English' ? 'EN' : language.slice(0, 2).toUpperCase();
  closePopovers();
});
$('#profileMenu').addEventListener('click', (event) => {
  const option = event.target.closest('button');
  if (option) showToast(`${option.textContent} is not available in this demo`);
});
$('#notificationMenu').addEventListener('click', () => closePopovers());
$('#emailButton').addEventListener('click', () => {
  $$('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.nav === 'Email'));
  renderAdminPage('Email');
});

$('#globalSearch').addEventListener('input', (event) => {
  if (activeAdminPage === 'Dashboards') {
    $('#tableSearch').value = event.target.value;
    tableQuery = event.target.value.trim();
    renderDeals();
  } else {
    pageSearchQuery = event.target.value.trim();
    renderAdminPage(activeAdminPage, { preserveSearch: true });
    const pageSearch = $('#pageSearch');
    if (pageSearch) {
      pageSearch.focus();
      pageSearch.setSelectionRange(pageSearch.value.length, pageSearch.value.length);
    }
  }
});
$('#tableSearch').addEventListener('input', (event) => {
  tableQuery = event.target.value.trim();
  $('#globalSearch').value = event.target.value;
  renderDeals();
});
$('#fullscreenButton').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    showToast(`Fullscreen unavailable: ${error.message}`);
  }
});
$('#showMore').addEventListener('click', (event) => renderActivities(event.currentTarget.getAttribute('aria-expanded') !== 'true'));
$('#sortButton').addEventListener('click', () => {
  sortAscending = sortAscending === null ? true : !sortAscending;
  $('#sortButton').setAttribute('aria-label', `Sort deals ${sortAscending ? 'ascending' : 'descending'} by amount`);
  renderDeals();
  showToast(`Sorted deals by amount ${sortAscending ? 'low to high' : 'high to low'}`);
});

function updateSelectAll() {
  const checks = $$('.row-select');
  const selected = checks.filter((checkbox) => checkbox.checked).length;
  $('#selectAll').checked = checks.length > 0 && selected === checks.length;
  $('#selectAll').indeterminate = selected > 0 && selected < checks.length;
  checks.forEach((checkbox) => checkbox.closest('tr').classList.toggle('is-selected', checkbox.checked));
}
$('#selectAll').addEventListener('change', (event) => {
  $$('.row-select').forEach((checkbox) => { checkbox.checked = event.target.checked; });
  updateSelectAll();
});
$('#dealsTableBody').addEventListener('change', (event) => {
  if (event.target.matches('.row-select')) updateSelectAll();
});
$('#dealsTableBody').addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (button) showToast(`${button.dataset.action === 'view' ? 'Viewing' : 'Editing'} ${button.closest('tr').cells[1].innerText.trim()}`);
});
$$('[data-view]').forEach((button) => button.addEventListener('click', () => {
  const label = button.dataset.view;
  const lowerLabel = label.toLowerCase();
  const destination = lowerLabel.includes('customer') || lowerLabel.includes('contact') ? 'CRM'
    : lowerLabel.includes('revenue') || lowerLabel.includes('deal') || lowerLabel.includes('sales') ? 'Sales'
      : lowerLabel.includes('schedule') || lowerLabel.includes('activity') ? 'Calendar'
        : 'Analytics';
  $$('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.nav === destination));
  renderAdminPage(destination);
  showToast(`${label} opened`);
}));
$$('[data-chart]').forEach((button) => button.addEventListener('click', () => {
  const chart = $('#revenueChart');
  if (button.dataset.chart === 'zoom-in') chart.classList.add('chart-zoomed');
  if (button.dataset.chart === 'zoom-out' || button.dataset.chart === 'reset') chart.classList.remove('chart-zoomed');
  if (button.dataset.chart === 'download') {
    const svg = $('.revenue-chart').cloneNode(true);
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'nexora-dashboard-chart.svg';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 0);
  }
  if (button.dataset.chart === 'menu') showToast('Chart options');
}));
$('#tableSearch').addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.currentTarget.value = '';
    $('#globalSearch').value = '';
    tableQuery = '';
    renderDeals();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePopovers();
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    $('#globalSearch').focus();
  }
});
window.addEventListener('resize', () => {
  if (!window.matchMedia('(max-width: 760px)').matches) {
    document.body.classList.remove('nav-open');
    $('#mobileBackdrop').hidden = true;
    $('#sidebarToggle').setAttribute('aria-expanded', 'true');
  }
});
