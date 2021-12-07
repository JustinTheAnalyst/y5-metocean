class AppURL {
    
    //connect localhost
    // static BaseURL = 'http://localhost:127.0.0.1:8000/api';

    //connect to live server
    static BaseURL = 'https://metocean.nzclevercoder.com/api';

    //get chart data
    static ChartData = this.BaseURL+'/chartdata';
}

export default AppURL
