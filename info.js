let info = {
    name: "Harish Vekatesh",
    logo_name: "harish",
    flat_picture: require('./src/assets/potrait.svg'),
    config: {
        use_cookies: true,
        navbar: {
            blur: false
        }
    },
    description: 'I\'m a Graduate student at The University of Texas at Dallas with an interest in Data Sciene, Data Analytics, Machine Learning and Artificial Intelligence - and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person with a keen passion for problem-solving and cutting edge technologies. I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of Data science skills, ranging from using ETL tools to developing Neural Network Models. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ',
    links: {
        linkedin: "https://www.linkedin.com/in/harishvenkatesh96/",
        github: "https://github.com/harishven",
        instagram: "https://www.instagram.com/harishram96/",
        resume: "https://drive.google.com/file/d/1l_cW_kkqL33rohRXJkElRowx3_r_o2cA/view?usp=sharing"
    },
    education: [{
            name: 'The University of Texas at Dallas',
            place: 'USA',
            date: 'Aug, 2019 - May, 2021(Expected)',
            degree: 'Masters in Information Technology and Management',
            gpa: '3.5/4.0',
            description: 'Currently pursuing my Master\'s in Information Technology and Management, while specializing in the field of Business Intelligence and Data Mining.',
            skills: ['Machine Learning', 'Data Visualizations', 'Big Data', 'Business Analytics', 'System Analysis', 'Project Management']
        },
        {
            name: 'Karunya University',
            place: 'India',
            date: 'July, 2013 - May, 2017',
            degree: 'Bachelors in Mechanical Engineering',
            gpa: '7.75/10.0',
            description: 'Graduated from Karunya University, Coimbatore with a Bachelors degree in Mechanical Engineering.',
            
        },

    ],
    experience: [
        {
            name: 'Accenture',
            place: 'India',
            date: 'May, 2019 - Jun, 2019',
            position: 'Data Analyst',
            description: 'Worked as a Software Engineering Analyst at their HealthCare Analytics Solutions Factory (for BCBS, NC). Analyzed customer data (Large Group 51+) and created Dashboards in Tableau and adhoc reports in SAP BO. Implemented distributed clusters using Apache Spark also Implemented ETL features for loading and maintenance of data warehouse',
            skills: ['Tableau', 'SAP BO', 'SQL', 'ETL', 'Unix Shell']
        },
        {
            name: 'Accenture',
            place: 'India',
            date: 'Jun, 2017 - May, 2019',
            position: 'Data Analyst / ETL developer',
            description: 'Worked as a Associate Software Engineer at their HealthCare Analytics Solutions Factory. Analyzed, built and maintained data warehouse to hold Customer and Payer related data using Teradata SQL and Ab Initio ETL tools',
            skills: ['SQL', 'ETL', 'Teradata', 'SQL', 'Ab initio', 'Informatica']
        },
        

    ],
    skills: [{
            title: 'Languages',
            info: ['Python', 'R', 'SQL', 'NoSQL', 'Scala'],
            icon: 'fa fa-code'
        },
        {
            title: 'Data Frameworks',
            info: ['Sklearn', 'Numpy', 'Pandas', 'Keras', 'Tensorflow', 'XGBoost', 'ARIMA', 'ETS' ],
            icon: 'fa fa-cubes'
        },
        {
            title: 'Databases',
            info: ['Teradata', 'MySQL', 'OracleSQL', 'MongoDB', 'Cassandra', 'Hbase'],
            icon: 'fa fa-database'
        },
        {
            title: 'Data Visualizations',
            info: ['Tableau', 'PowerBI', 'R Shiny', 'Seaborn', 'Matplotlib', 'SAP Lumira' ],
            icon: 'fa fa-pencil-square-o'
        },
        {
            title: 'Big Data Technologies',
            info: ['Apache Spark', 'Kafka', 'Hive', 'Impala', 'AWS EMR'],
            icon: 'fas fa-laptop-code'
        },
		{
            title: 'ETL Tools',
            info: ['Ab Initio', 'Informatica Power Center', 'Talend'],
            icon: 'fas fa-tools'
        }
    ],
    portfolio: [{
            name: 'Prediction of Humidity',
            pictures: [
                {
                    img:  require('./src/assets/portfolio/ds_airQuality/one.jpeg'),
                },
                {
                    img:  require('./src/assets/portfolio/ds_airQuality/two.png'),
                },
                {
                    img:  require('./src/assets/portfolio/ds_airQuality/three.png'),
                },
                {
                    img:  require('./src/assets/portfolio/ds_airQuality/four.png'),
                }
            ],
            technologies: ['Machine Learning', 'Neural Networks','Deep Learning' , 'PCA', 'Regression','Python'],
            category: 'Machine Learning and Neural Networks',
            date: 'Jun, 2020 - July, 2020',
            github: 'https://github.com/harishven/RH_Prediction_PCA_and_DeepLearning',
            visit: 'https://github.com/harishven/RH_Prediction_PCA_and_DeepLearning',
            description: 'Humans are very sensitive to humidity, as the skin relies on the air to get rid of moisture (Sweating). Relative Humidity also plays a role in Air conditioning along with temperature outside. With prediction of RH over a time frame peolple could prepare themselves for a switching to an air cooler instead of air conditioner to reduce usage of electricity at homes and save money. This could be used in intelligent air cooling or HVAC systems to turn of the Humidifier for days having the desired RH thus saving electricity. '
        },
        {
            name: 'Heart Disease Prediction',
            pictures: [

                {
                    img:  require('./src/assets/datascience/ds_Coronary/one.jpg'),
                },
				{
                    img:  require('./src/assets/datascience/ds_Coronary/one.png'),
                },
                {
                    img:  require('./src/assets/datascience/ds_Coronary/two.png'),
                },
                {
                    img:  require('./src/assets/datascience/ds_Coronary/three.png'),
                }
            ],
            technologies: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'PCA', 'Classification', 'Python'],
            category: 'Machine Learning and Neural Networks',
            date: 'Jun, 2020 - July, 2020',
            github: 'https://github.com/harishven/Coronary_Disease_Prediction_PCA_DeepLearning',
            visit: 'https://github.com/harishven/Coronary_Disease_Prediction_PCA_DeepLearning',
            description: 'Coronary heart disease (CHD), develops when the coronary arteries become too narrow and fail to supply oxygen and blood to the heart. Various contributing factors were analyzed like Age, Cholestrol levels, No of cigrattes smoked per day and Blood Pressure. We are able to predict a 10 year Risk of CHD with Machine Learning models like SVM, Decision Tree etc; and with using Neural Networks'
        },
		{
            name: 'Twitter Sentiment Analysis ',
            pictures: [
                {
                    img: require('./src/assets/datascience/ds_twitter/oneC.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_twitter/oneD.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_twitter/oneB.png'),
                },
                {
                    img: require('./src/assets/datascience/ds_twitter/two.png')
                }
            ],
            technologies: ['Apache Spark', 'Scala', 'ELK Stack', 'Kafka', 'CoreNLP', 'Spark Streaming'],
            category: 'Big Data',
            date: 'Jun, 2020 - July, 2020',
            github: 'https://github.com/harishven/Quantium_DataAnalytics',
            visit: 'https://github.com/harishven/Quantium_DataAnalytics',
            description: 'Sentiments of twitter tweets for a certain topic/hashtags are viewed, analyzed and monitored for a specified time interval. The tweets are streamed using Apache Spark Streaming, Scala and Kafka using TwitterUtils and the sentiments are analyzed using CoreNLP package. ElastiSearch acts as the consumer and LogStash as the conector, the data is sent to Kibana where the tweets are analyzed and monitored through Dashboards. '
        },
        {
            name: 'Customer Analytics',
            pictures: [
                {
                    img: require('./src/assets/datascience/ds_Quantium/one.jpg'),
                },
                {
                    img: require('./src/assets/datascience/ds_Quantium/twoA.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_Quantium/twoB.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_Quantium/three.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_Quantium/four.png'),
                }
            ],
            technologies: ['Data Wrangling', 'Data Analysis', 'Statistical Testing', 'R'],
            category: 'Data Analytics',
			date: 'July, 2020 - Aug, 2020',
            github: 'https://github.com/harishven/Quantium_DataAnalytics',
            visit: 'https://github.com/harishven/Quantium_DataAnalytics',
            description: 'As part of InsideSherpa - Quantium Data Analytics Virtual Program, analyzed trasactional & customer data for large supermarket brands. Identified Customer purchasing behaviours to generate insights and provide commercial recommendations.<br/><br/> Extended the analysis further to help find benchmark stores that allow you to test the impact of the trial store layouts on customer sales. With all these, reports and presentation were prepared and presented to the Store Manager. '
        },
        
        {
            name: 'Seattle House Prices',
            pictures: [
                {
                    img: require('./src/assets/datascience/ds_Seattle/one.jpg'),
                },
                {
                    img: require('./src/assets/datascience/ds_Seattle/two.png'),
                },
				{
                    img: require('./src/assets/datascience/ds_Seattle/three.png'),
                }
            ],
            technologies: ['Machine Learning', 'Regression', 'Python'],
            category: 'Machine Learning',
            github: 'https://github.com/harishven/Seattle_house_price_prediction',
            date: 'May, 2020 - Jun, 2020',
            visit: 'https://github.com/harishven/Seattle_house_price_prediction',
            description: 'Real Estate Market is very unpredictable, house prices go and down constantly. This Machine Learning model is used to predict the price of houses at Seattle with respect to attributes of the house such as sqft area, location etc. This model can be used by investors to correctly assess the possible price for the house before they buy.'
        },

    ],
    portfolio_design: [{
            name: 'Exxon Refineries Disaster Management - Tableau',
            title: 'Exxon Refineries Disaster Management',
            pictures: [
                
                {
                    img: require('./src/assets/dataviz/dv_Exxon/one.png'),
                    title: "Natural Disasters at USA"
                },
                {
                    img: require('./src/assets/dataviz/dv_Exxon/two.png'),
                    title: "Disasters happening around the Refineries"
                },
				{
                    img: require('./src/assets/dataviz/dv_Exxon/three.png'),
                    title: "Further analysis of all the disasters happening at the state location of Exxon Refineries"
                },
				{
                    img: require('./src/assets/dataviz/dv_Exxon/logo.jpg'),
                    title: "Exxon Refineries Disaster Management"
                }
            ],
            technologies: ['Tableau', 'Dashboards'],
            category: 'Tableau',
            github: 'https://github.com/harishven/Exxon_Refineries_Natural_Disaster_Management',
            date: 'March 2020',
            visit: 'https://github.com/harishven/Exxon_Refineries_Natural_Disaster_Management',
            description: 'Natural Disasters are unpredictable and recovery from disaster is very hard. The dashboards made in Tableau analyze all the various disasters happening in the USA, Look at the locations of EXXON Refineries in specific and check the type of disaster that have have been happening. With this information in hand Exxon can plan how to manage and recover from disaster saving time, money and resources as well as prepare for deploying their next refinery. '
        },
        {
            name: 'Corona Virus Dahboards - PowerBI',
            title: 'Corona Virus Dahboards - PowerBI',
            pictures: [{
                    img: require('./src/assets/dataviz/dv_corona/one.png'),
                    title: 'Dashboard for COVID - 19 in India'
                },
                {
                    img: require('./src/assets/dataviz/dv_corona/two.png'),
                    title: 'Growth rate of cases in India'
                }
            ],
            technologies: ['PowerBI', 'Dashboards'],
            category: 'Dashboards',
            github: '',
            date: 'March 2020',
            visit: '',
            description: 'Interactive Dashboards for monitoring COVID - 19 cases in India, data can be fed inside or live data can be streamed. Cases with respect to location or geographic detail can be monitored for date, day and month.'
        },
        {
            name: 'Food Price Fluctuation - Tableau',
            title: 'Food Prices Fluctuation - Tableau',
            pictures: [{
                    img: require('./src/assets/dataviz/dv_goods/three.png'),
                    title: 'Goods Price Fluctuation for Countries along Time'
                },
                {
                    img: require('./src/assets/dataviz/dv_goods/one.png'),
                    title: 'Average prices of goods - Filters given for Year and Country'
                },
                {
                    img: require('./src/assets/dataviz/dv_goods/two.png'),
                    title: 'Price Fluctuation of Apple for Countries through time - Filter for Country and Products'
                }
            ],
            technologies: ['Tableau', 'Dashboards and Stories'],
            category: 'Dashboards and Stories',
            github: '',
            date: 'March 2020',
            visit: '',
            description: 'Food prices at different countries and also how they have been fluctuating along time have been put into Dashboards. A narrative visualization of story for the prices of goods changing over time at different is also presented.  '
        },
		{
            name: 'Food Court Analysis - D3 Charts',
            title: 'Food Court Analysis - D3 Charts',
            pictures: [
                {
                    img: require('./src/assets/dataviz/dv_d3/one.png'),
                    title: 'HeatMap with Hierarchical representation of Stores and Menu'
                },
                {
                    img: require('./src/assets/dataviz/dv_d3/two.png'),
                    title: 'Gross Sales Analysis with Sonification'
                }
            ],
            technologies: ['D3 charts', 'HTML' , 'CSS', 'JavaScript'],
            category: 'Web Visualizations',
            github: '',
            date: 'April 2020',
            visit: '',
            description: 'Data fron Different stores of a University Food Court is taken and analyzed for gross sales for each store (Sonification is given for each bar of the Bar Chart). The hierarchy of stores are put inside a TreeMap for different stores and their Menu '
        },
		{
            name: 'Food Court Analysis - D3 Charts',
            title: 'Food Court Analysis - D3 Charts',
            pictures: [
                {
                    img: require('./src/assets/dataviz/dv_gephi/oneA.png'),
                    title: 'Apple Company\'s Industry Network'
                },
				{
                    img: require('./src/assets/dataviz/dv_gephi/one.png'),
                    title: 'Apple Company\'s Industry Network'
                },
				{
                    img: require('./src/assets/dataviz/dv_gephi/twoA.png'),
                    title: 'Apple\' Website Network Graph'
                },
				{
                    img: require('./src/assets/dataviz/dv_gephi/two.png'),
                    title: 'Apple\' Website Network Graph'
                },
				{
                    img: require('./src/assets/dataviz/dv_gephi/threeA.png'),
                    title: 'Apple\'s Internal-External Company Network'
                },
                {
                    img: require('./src/assets/dataviz/dv_gephi/three.png'),
                    title: 'Apple\'s Internal-External Company Network'
                }
            ],
            technologies: ['Gephi' , 'Graphs', 'Network Visualization'],
            category: 'Graph / Network Visualizations',
            github: '',
            date: 'April 2020',
            visit: '',
            description: 'Gephi is a neywork visualization software, It uses various algorithms to visualize the network to Apple. Node(Source and Target) data and Edge(connection) Data and fed inside the system and their respective weights are given, and the algorithms provided in the software can be used to create you visualizations. Here Apple Company\'s Network with other companies is Gephi for different categories and same is viewed in web browser when integrated with JavaScript '
        }
    ],
    recommendations: [{
            title: 'Harish was a quick learner which helped him grasp abinitio ,teradata and unix concepts in very short span of time. His dedication and sincerity towards accomplishment of tasks assigned to him were his best qualities. He has been instrumental in delivering many Ab Initio ETL projects.',
            author: 'Dinesh Kumar S',
            position: 'Team Lead',
            company: 'Accenture',
            location: 'Chennai'
        },
        {
            title: 'During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.',
            author: 'Mrinal Pai',
            position: 'Co-Founder & Director',
            company: 'Skylark Drones',
            location: 'Bangalore'
        },



    ]
}

export default info;