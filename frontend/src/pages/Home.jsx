

const Home = () => {
    return (
        
        <div>
<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Add this line
            flexDirection: 'row',
            width: '100vw',
            padding: 40,
            height: '300' // You might need to adjust the height
        }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                maxWidth:400
            }
            }>
                <div style ={{
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 'bolder',
                }}>About Us</div>
                <div style ={{
                    textAlign: 'center'
                }}>Our platform connects food donors with NGOs to reduce food wastage, address food insecurity, and promote sustainability. Features include user registration, donation listings, and security measures</div>
            </div>
        </div>
        </div>
    );
};


export default Home;
