import { useState } from "react";
import './team.css';

export function Team() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className="team__container background_dark padding-sections">
      <div className="team__body max-width">
        <div className="team__content">
          <div className="team__header">
            <h3>Meet the Team</h3>
            <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world.</p>
          </div>

          <div className="team__member">
            <img src="/images/team_kc.jpg" alt="karla" />

            <hr className={`team__member-hr-top ${isExpanded ? 'team__member-hr-top--expanded' : 'team__member-hr-top--collapsed'}`}/>

            <div className="team__member-header" onClick={() => setIsExpanded(!isExpanded)}>
              <h4 className="team__member-name">Karla Criselda Ranay</h4>
              <span className={`team__toggle-icon ${isExpanded ? 'team__toggle-icon--minus' : 'team__toggle-icon--plus'}`}></span>

            </div>

            <div className={`team__member-content ${isExpanded ? 'team__member-content--expanded' : 'team__member-content--collapsed'
              }`}>
              <p>With 12 years of experience in the Australian financial industry as a paraplanner and associate adviser, Karla is currently pursuing a Graduate Diploma of Financial Planning to further enhance her impact. She thrives on tackling complex advice-almost as much as she enjoys conquering tough rock-climbing routes!</p>
            </div>
            <hr className="team__member-hr-bottom"/>
          </div>
              <br />
          <div className="team__member">
            <img src="/images/team_may.png" alt="may" />
            
            <hr className={`team__member-hr-top ${isExpanded2 ? 'team__member-hr-top--expanded' : 'team__member-hr-top--collapsed'}`}/>

            <div className="team__member-header" onClick={() => setIsExpanded2(!isExpanded2)}>
              <h4 className="team__member-name">
                May Boquiron
              </h4>
              <span className={`team__toggle-icon ${isExpanded2 ? 'team__toggle-icon--minus' : 'team__toggle-icon--plus'}`}></span>
            </div>

            <div className={`team__member-content ${isExpanded2 ? 'team__member-content--expanded' : 'team__member-content--collapsed'
              }`}>
              <p>With 13 years of experience in the Australian Financial Industry, May has excelled as a paraplanner, specialist, and manager. Now in New Zealand, her advisory work is transforming the lives of advisers and clients alike. Her dedication shines through both professionally and personally.</p>
            </div>

            <hr className="team__member-hr-bottom"/>
          </div>

        </div>
      </div>
    </div>
  )
}