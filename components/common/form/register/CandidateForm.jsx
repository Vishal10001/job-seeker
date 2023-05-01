const  CandidateFormContent = () => {
    return (
      <form method="post" action="add-parcel.html">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
  
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
          />
        </div>
  
        <div className="form-group">
          <label>State </label>
          <input type="text" name="State" placeholder="State" required />
        </div>
  
        <div className="form-group">
          <label>ZipCode</label>
          <input
            type="text"
            name="zipcode"
            pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
            placeholder="ZipCode"
            required
          />
        </div>
  
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            maxLength={10}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
            required
          />
        </div>
    
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="username"
            pattern=".+@globex\.com"
            placeholder="Email"
            required
          />
        </div>
        {/* name */}
  
        <div className="form-group">
          <label>Password</label>
          <input
            id="password-field"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        {/* password */}
  
        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Register
          </button>
        </div>
        {/* login */}
      </form>
    );
  };
  
  export default CandidateFormContent;
  