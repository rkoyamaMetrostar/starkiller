/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const currentUser = 'Guest';
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Welcome {currentUser}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
