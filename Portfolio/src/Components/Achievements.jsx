

function Achievements(){
    const achievements = [
    { name: "GUTS DYHTG 2025", award:"Honorable Mention",event:"Hackathon", description: "Awarded Honorable Mention for our project GlasLet'sgow at the GUTS DHYTG Hackathon 2025, competing among 10+ teams and 50+ participants.", year: "2025",participants:"10+ Teams 50+ Participants" },
    {  name: "GUTS Code Olympics 2026 ",award:"Top 20 Team",event:"Competition", description: "Proud to have placed in the Top 20 teams in the GUTS Code Olympics 2026, showcasing strong problem-solving and teamwork skills in competitive programming.", year: "2026",participants:"Top 20 Teams" },
    
  ];

    const AchievementCard = ({name, award, event, description, year, participants}) =>{
        return(
            <>
            <div className="bg-[#08152F] border border-blue-500 rounded-2xl w-100 h-95">
                <span className="bg-[#142C9E] text-white px-4 rounded-sm font-medium mt-10">
  {event}
</span>
                <h3 className="text-xl mt-6 font-semibold">{name}</h3>
                <h3 className="text-xl text-blue-400 font-semibold">{award}</h3>
                <p className="text-lg mt-12 ">{description}</p>
                <div className="flex align-center justify-center mt-15 gap-25">
                      
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-calendar text-blue-400"></i>
                      <span>{year}</span>
                    </div>

                    <div className="flex items-center gap-2">
                    <i className="fa-solid fa-trophy text-blue-400"></i>
                    <span>{participants}</span>
                    </div>
                </div>
            </div>
            </>
        )
    }

     const AchievementSection = ({ achievements }) => {
    return (
      <div className="mt-15 ml-70">
        

        <div className="grid grid-cols-1 gap-70 md:grid-cols-2 lg:grid-cols-3 ">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.name}
              name={achievement.name}
               event={achievement.event}
               award={achievement.award}
               description={achievement.description}
                year={achievement.year}
                 participants={achievement.participants}

            
            />
          ))}
        </div>
      </div>
    );
  };



    return(
        <>
         <div className="mx-auto max-w-8xl bg-slate-950 px-8 py-16 text-white">
         <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold">
            Achievements
          </h1>
            <AchievementSection achievements={achievements}/>
         
        </div>
        </div>
        </>
    )
}
export default Achievements