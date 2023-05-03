const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} by{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resummerr
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
