import BarsForGrafic from '../modules/BarsForGrafic';
import '../modules/styles/Skills.scss';

function Skills({ skills }) {
  return (
    <div className="skill_grafic">
      <section className="skill_grafic-left">
        <div>
          <span>10</span>
        </div>
        <div>
          <span>9</span>
        </div>
        <div>
          <span>8</span>
        </div>
        <div>
          <span>7</span>
        </div>
        <div>
          <span>6</span>
        </div>
        <div>
          <span>5</span>
        </div>
        <div>
          <span>4</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>0</span>
        </div>
      </section>
      <section className="skill_grafic-right">
        <div className="skill_grafic-right-bars">
          {skills.map(e => (
            <BarsForGrafic key={e.id} value={e} />
          ))}
        </div>
        <div className="skill_grafic-right-name"></div>
      </section>
    </div>
  );
}

export default Skills;
