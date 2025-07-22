import './team.css';

export function Team() {

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
                <hr />
                <h4>Karla Criselda Ranay</h4>
                <p>With 12 years of experience in the Australian financial industry as a paraplanner and associate adviser, Karla is currently pursuing a Graduate Diploma of Financial Planning to further enhance her impact. She thrives on tackling complex advice-almost as much as she enjoys conquering tough rock-climbing routes!</p>
                <hr />     
            </div>

            <div className="team__member">       
                <img src="/images/team_may.png" alt="may" />  
                <hr />
                <h4>May Boquiron</h4>
                <p>With 13 years of experience in the Australian Financial Industry, May has excelled as a paraplanner, specialist, and manager. Now in New Zealand, her advisory work is transforming the lives of advisers and clients alike. Her dedication shines through both professionally and personally.</p>
                <hr />     
            </div>

        </div>
      </div>
    </div>
  )
}