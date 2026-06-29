import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <h1 style={{ fontSize: '120px', margin: 0, color: '#fff', fontWeight: 'bold' }}>
          404
        </h1>
        <p style={{ fontSize: '24px', color: '#fff', marginTop: '10px', marginBottom: '30px' }}>
          Page Not Found
        </p>
        
        {/* IMPORTANT LINE */}
        <Link to="/"
        
        
        style={{
          padding: '12px 30px',
          backgroundColor: '#fff',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'transform 0.3s, box-shadow 0.3s',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          display: 'inline-block'
        }} onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
           onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
          Go to Home
        </Link>
      </div>
    );
  }

export default NotFoundPage;