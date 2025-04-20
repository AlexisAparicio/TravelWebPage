const Dashboard = () => {
        return (
        <div className="p-8 ml-64 mt-16">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <iframe
            title="Power BI"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjkwMDM1NzctZDZmNS00MDMzLWExYTgtMzdhYmJmOGNlYmE0IiwidCI6IjdhNTUwYjgxLTE3NjQtNGMzNC05NGUyLWQ5MmZjNmJmMDZmMSIsImMiOjJ9"
            allowFullScreen
            ></iframe>
        </div>
        );
    };
    
export default Dashboard;