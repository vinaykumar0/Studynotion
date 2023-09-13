import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import "../App.css"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import { InstructorSection } from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>

        {/* Section 01 */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>

        <Link to="/signup">
            <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all
            duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200
                group-hover:bg-richblack-900'>
                    <p>Become an instructor</p>
                    <FaArrowRight/>
                </div>
            </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with <HighlightText text="Coding Skills" />
        </div>

        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 '>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hand-on projects, quizzes and personalized feedback from instructor.
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}>
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}>
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-3 my-12 boxShadow2'>
            <video
            muted
            loop
            autoPlay
            >
                <source src={Banner} type='video/mp4'/>
            </video>
        </div>

        {/* Code Section 1 */}
        <div>
            <CodeBlocks
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>Unloack your{" "}
                        <HighlightText text={"Coding Potential"} />
                        {" "}with our online courses
                    </div>
                }
                subheading={
                    "Our Courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing there knowledge with you"
                }
                ctabtn1={
                    {
                        text: "Try it Yourself",
                        active: true,
                        linkto:"/signup"
                    }
                }
                ctabtn2={
                    {
                        text: "Learn More",
                        active: false,
                        linkto:"/login"
                    }
                }
                codeblock={`<DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel ="stylesheet" href="styles.css/></head>\n<body>
                            <h1>\n<a href="/">Header</a>\n<h1><nav>\n<a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a></nav>`}
                codeColor={"text-yellow-25"}
                backgroundGradient={<div className="codeblock1 absolute"></div>}

            />
        </div>

        {/* Code Section 2 */}
        <div>
        <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
                <div className='text-4xl font-semibold'>Start{" "}
                    <HighlightText text={`Coding \n in seconds`} />
                </div>
            }
            subheading={
                "Go ahead, give it a try. Our hands on learning environment means you'll be writing real code from your very first lesson "
            }
            ctabtn1={
                {
                    text: "Continue Lesson",
                    active: true,
                    linkto:"/signup"
                }
            }
            ctabtn2={
                {
                    text: "Learn More",
                    active: false,
                    linkto:"/login"
                }
            }
            codeblock={`<DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel ="stylesheet" href="styles.css/></head>\n<body>
                        <h1>\n<a href="/">Header</a>\n<h1><nav>\n<a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a></nav>`}

            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
        />
        </div>

            <ExploreMore />
        </div>

        {/* Section 02 */}
        <div className='bg-pure-greys-5 text-richblack-700'>

            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row gap-7 text-white'>

                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3 '>
                                Explore full catalogue
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                            <div >Learn More</div>
                        </CTAButton>

                    </div>

                </div>

            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                <div className='flex flex-row gap-5 mt-[95px] mb-10 '>

                    <div className='text-4xl font-semibold w-[45%]'>
                        Get a skills you need for a {" "}
                        <HighlightText text={`Job That is in demand.`} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>

                        <div className='text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today to be a competitive specialist requires more than professional skills.
                        </div>

                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Lear more
                            </div>
                        </CTAButton>

                    </div>

                </div>

                <TimelineSection />

                <LearningLanguageSection />
            </div>


        </div>

        {/* Section 03 */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

            <InstructorSection />

            <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learners</h2>
            {/* Review Slider here */}
            <ReviewSlider />

        </div>

        {/* Footer */}
        <Footer />

    </div>
  )
}

export default Home