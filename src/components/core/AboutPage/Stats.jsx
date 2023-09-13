import React from 'react'

const Stats = [
    {count:"5K", label: "Active Students"},
    {count:"10+", label: "Mentors"},
    {count:"200+", label: "Courses"},
    {count:"50+", label: "Awards"}
];

function StatsComponent() {
  return (
    <section>

        <div>
            <div className=' flex gap-x-[200px] justify-center mt-10 mb-10'>
                {
                    Stats.map((data, index) => {
                        return (
                            <div key={index}>
                                <h1>{data.count}</h1>
                                <h2>{data.label}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default StatsComponent