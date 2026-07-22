import React from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    const flights = [
      { id: 1, airline: 'Air India', from: 'Chennai', to: 'Delhi', price: 5000 },
      { id: 2, airline: 'IndiGo', from: 'Mumbai', to: 'Bangalore', price: 4000 },
      { id: 3, airline: 'SpiceJet', from: 'Kolkata', to: 'Chennai', price: 4500 }
    ];

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Greeting isLoggedIn={isLoggedIn} />
        
        {isLoggedIn ? (
          <div>
            <LogoutButton onClick={this.handleLogoutClick} />
            <div style={{ marginTop: '20px', border: '1px solid green', padding: '15px' }}>
              <h2>Book Flight Tickets</h2>
              <p>Choose a flight and proceed to book tickets:</p>
              <ul>
                {flights.map(f => (
                  <li key={f.id} style={{ margin: '10px 0' }}>
                    <strong>{f.airline}</strong>: {f.from} to {f.to} - Rs.{f.price}
                    <button style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>
                      Book Ticket
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <LoginButton onClick={this.handleLoginClick} />
            <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
              <h2>Flight Availability (Browse Only)</h2>
              <p>Please log in to book flight tickets.</p>
              <ul>
                {flights.map(f => (
                  <li key={f.id} style={{ margin: '5px 0' }}>
                    <strong>{f.airline}</strong>: {f.from} to {f.to} - Rs.{f.price} (Login to Book)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
