import { Postings } from "@/components/posting";

export const researchPostings = [
  {
    title: "Job 1",
    description: "This is a great job"
  },
  {
    title: "Job 2",
    description: "This is also a great job"
  },
  {
    title: "Job 3",
    description: "This is not just another job — it's a rare chance to be part of something genuinely exceptional. You'll join a forward-thinking team working on impactful initiatives that are already shaping the future in ways we can’t fully reveal just yet. The role offers unmatched flexibility, outstanding growth potential, and benefits that go far beyond the usual. If you've been waiting for a sign that it's time to level up your career in a big way, this is it. We can't say much here, but trust us — you'll want to be part of this."
  },
  {
    title: "Job 3",
    description: "This is not just another job — it's a rare chance to be part of something genuinely exceptional. You'll join a forward-thinking team working on impactful initiatives that are already shaping the future in ways we can’t fully reveal just yet. The role offers unmatched flexibility, outstanding growth potential, and benefits that go far beyond the usual. If you've been waiting for a sign that it's time to level up your career in a big way, this is it. We can't say much here, but trust us — you'll want to be part of this."
  },
  {
    title: "Job 3",
    description: "This is not just another job — it's a rare chance to be part of something genuinely exceptional. You'll join a forward-thinking team working on impactful initiatives that are already shaping the future in ways we can’t fully reveal just yet. The role offers unmatched flexibility, outstanding growth potential, and benefits that go far beyond the usual. If you've been waiting for a sign that it's time to level up your career in a big way, this is it. We can't say much here, but trust us — you'll want to be part of this."
  },
  {
    title: "Job 3",
    description: "This is not just another job — it's a rare chance to be part of something genuinely exceptional. You'll join a forward-thinking team working on impactful initiatives that are already shaping the future in ways we can’t fully reveal just yet. The role offers unmatched flexibility, outstanding growth potential, and benefits that go far beyond the usual. If you've been waiting for a sign that it's time to level up your career in a big way, this is it. We can't say much here, but trust us — you'll want to be part of this."
  },
  {
    title: "Job 3",
    description: "This is not just another job — it's a rare chance to be part of something genuinely exceptional. You'll join a forward-thinking team working on impactful initiatives that are already shaping the future in ways we can’t fully reveal just yet. The role offers unmatched flexibility, outstanding growth potential, and benefits that go far beyond the usual. If you've been waiting for a sign that it's time to level up your career in a big way, this is it. We can't say much here, but trust us — you'll want to be part of this."
  },
]

export default function Home() {
  return (
    
      
    <div className="flex justify-center items-start w-[65vw] mx-auto">
      <div className="flex justify-center flex-col w-[40vw] text-center max-h-screen bg-white border-2 border-[#BBB]">
        <div className="text-left m-x-5 h-[10vh] overflow-hidden">
          <h1 className="font-black text-lg md:text-2xl m-5">Top research opportunities for you</h1>
          <p className="m-5">Based on your profile and preferences</p>
        </div>
        <div className="overflow-y-auto h-[82vh]">
        <Postings items={researchPostings}></Postings>
        </div>
        </div>
      <div className="flex justify-center flex-col w-[60vw] text-center h-full bg-white border-2 border-l-0 border-[#BBB]">
        <p>hi</p>
      </div>
    </div>
  );
}
