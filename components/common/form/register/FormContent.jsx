const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="companyname"
          placeholder="Company Name"
          required
        />
      </div>

      <div className="form-group">
        <label>Company Address</label>
        <input
          type="text"
          name="companyaddress"
          placeholder="Company Address"
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
        <label>Company Phone</label>
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
          name="email"
          pattern=".+@globex\.com"
          placeholder="Email"
          required
        />
      </div>

      <div className="form-group">
        <label>WebSite</label>
        <input
          type="url"
          name="website"
          pattern="https://.*"
          placeholder="https://example.com"
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

export default FormContent;
