function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <button onClick={scrollToTop} style={{ color: 'blue', cursor: 'pointer' }}>
      Back to Top
    </button>
  );
}
