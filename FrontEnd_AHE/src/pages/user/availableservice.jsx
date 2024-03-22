  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import img from '../../images/home2.jpg';
  import config from '../config';
  import Footer from '../../components/Footer';

  export default function AvailableService() {
    const [MyServices, setMyServices] = useState([]);

    useEffect(() => {
      servicelist();
    }, []);

    const servicelist = () => {
      const url = config.serverURL + `/admin/services/showservices`;

      axios.get(url).then((response) => {
        const res = response.data;
        console.log("result", res);
        setMyServices(res);
      });
    };

    return (
      <div>
        <div style={styles.container1}>
          <h2 style={styles.headline}>Our Services</h2>
          <div style={styles.cardContainer}>
            {MyServices.map((myservice) => {
              const imageUrl = config.serverURL + `/admin/image/download/${myservice.id}`;
              return (
                <div key={myservice.id} style={styles.card}>
                  <img alt='service' style={styles.image} src={imageUrl} />
                  <div style={styles.cardContent}>
                    <Link to={'/bookservice/' + myservice.id} style={styles.link}>
                      <h3 style={styles.title}>{myservice.serviceName}</h3>
                      <p style={styles.description}>{myservice.shortDesc}</p>
                      <button style={styles.button}>Rs. {myservice.serviceCharge}</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          <Footer />
      </div>
    );
  }

  const styles = {
    container1: {
      backgroundImage: `url(${img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      color: 'black',
      padding: '95px',
    },
    headline: {
      textAlign: "center",
      color: "navy",
      fontSize: '4rem',
      marginTop: '-40px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: '20px',
    },
    card: {
      width: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      border: '1px solid #ddd',
      background: 'white',
      position: 'relative',
      marginTop: '60px',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    cardContent: {
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      flex: '1',
    },
    title: {
      fontSize: '24px',
      margin: '0',
    },
    description: {
      fontSize: '16px',
      margin: '10px 0',
      fontStyle: 'italic',
    },
    button: {
      fontSize: '18px',
      backgroundColor: 'blue',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '10px',
      right: '10px',
    },
  };
