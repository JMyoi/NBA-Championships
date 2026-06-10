export default function Card({ year, winner, score, mvp, img, link }) {
    return (
        <div className="card">
            {img && <img className="card-logo" src={img} alt={`${winner} logo`} />}
            <span className="card-year">{year}</span>
            <h2 className="card-winner">{winner}</h2>
            <p className="card-score">{score}</p>
            <p className="card-mvp">
                <span className="card-label">Finals MVP</span>
                {mvp}
            </p>
            <a className="card-link" href={link} target="_blank" rel="noreferrer">
                Read more →
            </a>
        </div>
    );
}
