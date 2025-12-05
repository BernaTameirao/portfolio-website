import './MainPage.css';
import React, {useEffect, useState, Fragment} from 'react';
import { Link } from 'react-router-dom';

import {UnrollBanner} from '../Components/UnrollBanner';
import {Carousel} from "../Components/Carousel";
import {ImagesSwitcher} from "../Components/ImagesSwitcher";
import {Footer} from '../Components/Footer';
import {PhaseButton} from '../Components/PhaseButton';

import { bannerImages, particleImages, robotImages, recommendationImages, petImages, flags, logos } from "../Images";
import { languages } from "../Others";

function MainPage() {

    const [language, setLanguage] = useState(languages.en);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const languagesFiles = [languages.en, languages.ptbr];
    const phaseButtonContent = [flags.usa, flags.brazil];

    const handleSwitch = (event) => {

        setLanguage(languagesFiles[event]);

        localStorage.setItem("language", JSON.stringify(event));
    }

    useEffect(() => {

        const getLanguage = () => {

            const aux = JSON.parse(localStorage.getItem('language'));

            aux === null ? setLanguage(languages.en) : setLanguage(languagesFiles[aux]);
        }

        getLanguage();
    }, [languagesFiles]);

    return (
        <div className="App">
            <div className="fixed-content-left">
                <Link
                    to="https://github.com/BernaTameirao"
                    className="link-custom"
                    target="_blank"><UnrollBanner value={logos.github}
                                                  text={language.iconsText.github}/></Link>
                <Link
                    to="https://bernardo-t.itch.io/"
                    className="link-custom"
                    target="_blank"><UnrollBanner value={logos.itchio}
                                                  text={language.iconsText.itch}/></Link>
                <Link
                    to=""
                    className="link-custom"
                    target="_blank"><UnrollBanner value={logos.instagram}
                                                  text={language.iconsText.instagram}/></Link>
                <Link
                    to="https://www.linkedin.com/in/btameirao/"
                    className="link-custom"
                    target="_blank"><UnrollBanner value={logos.linkedin}
                                                  text={language.iconsText.linkedin}/></Link>
            </div>

            <div className="true-background">


                <div className="first-background">
                    <div className="lateral-div"></div>
                    <div className="central-div">
                        <Carousel images={bannerImages}/>
                    </div>
                    <div className="lateral-div">
                        <div className="switch-div">
                            <PhaseButton content={phaseButtonContent}
                                         data={JSON.parse(localStorage.getItem('language')) === null ? 0 : JSON.parse(localStorage.getItem('language'))}
                                         sendData={handleSwitch}/>
                        </div>
                    </div>
                </div>


                <div className="second-background">
                    <h1>{language.intro.title}</h1>
                    <div className="line"/>
                    <div className="row-div" id="topic0">
                        <div className="block-text">
                            <p>{language.intro.pt1.split("<br/>").map((line, index) => (
                                <Fragment key={index}>
                                    {line}
                                    <br/>
                                </Fragment>
                            ))}</p>
                        </div>
                        <div className="block-text">
                            <p>{language.intro.pt2.split("<br/>").map((line, index) => (
                                <Fragment key={index}>
                                    {line}
                                    <br/>
                                </Fragment>
                            ))}</p>
                        </div>
                    </div>
                    <div className="line"/>


                    <h2>{language.aboutMe.mainTitle}</h2>
                    <div className="row-div" id="topic1">
                        {language.aboutMe.chapters1.map((chapter, chapterIndex) => (
                            <Fragment key={chapterIndex}>
                                <div className="block-text">
                                    <h3>{chapter.title}</h3>
                                    {chapter.topics.map((topic, topicIndex) => (
                                        <div key={topicIndex}>
                                            <h4>{topic.title}</h4>
                                            <p>{topic.text}</p>
                                        </div>
                                    ))}
                                </div>
                                {chapterIndex % 2 === 0 ?
                                    (<hr/>) : (<></>)
                                }
                            </Fragment>
                        ))}
                    </div>
                    <div className="row-div" id="topic1">
                        {language.aboutMe.chapters2.map((chapter, chapterIndex) => (
                            <>
                                <div className="block-text" key={chapterIndex}>
                                    <h3>{chapter.title}</h3>
                                    {chapter.topics.map((topic, topicIndex) => (
                                        <div key={topicIndex}>
                                            <h4>{topic.title}</h4>
                                            <p>{topic.text}</p>
                                        </div>
                                    ))}
                                </div>
                                {chapterIndex % 2 === 0 ?
                                    (<hr/>) : (<></>)
                                }
                            </>
                        ))}
                    </div>
                </div>


                <div className="third-background">
                    <div className="lateral-div"/>
                    <div className="central-div2">
                        <Link to="https://github.com/BernaTameirao/evolutionary-arm" className="link-custom">
                            <h1>{language.evolutionaryRobot.mainTitle}</h1></Link>
                        <div className="row-div" id="topic2">
                            <div className="block-text">
                                <p>
                                    {language.evolutionaryRobot.text.split("<br/>").map((line, index) => (
                                        <Fragment key={index}>
                                            {line}
                                            <br/>
                                        </Fragment>
                                    ))}
                                </p>
                            </div>
                            <ImagesSwitcher images={robotImages} background={"third"}/>
                        </div>
                    </div>
                    <div className="lateral-div"/>
                </div>


                <div className="second-background">
                    <Link to="https://hermes.tameirao.me" className="link-custom">
                        <h1>{language.recommendationSystem.mainTitle}</h1></Link>
                    <div className="row-div" id="topic3">
                        <ImagesSwitcher images={recommendationImages} background={"second"}/>
                        <div className="block-text">
                            <p>
                                {language.recommendationSystem.text.split("<br/>").map((line, index) => (
                                    <Fragment key={index}>
                                        {line}
                                        <br/>
                                    </Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>


                <div className="third-background">
                    <div className="lateral-div"/>
                    <div className="central-div2">
                        <Link to="https://github.com/BernaTameirao/desktop-pet" className="link-custom">
                            <h1>{language.desktopPet.mainTitle}</h1></Link>
                        <div className="row-div" id="topic2">
                            <div className="block-text">
                                <p>
                                    {language.desktopPet.text.split("<br/>").map((line, index) => (
                                        <Fragment key={index}>
                                            {line}
                                            <br/>
                                        </Fragment>
                                    ))}
                                </p>
                            </div>
                            <ImagesSwitcher images={petImages} background={"third"}/>
                        </div>
                    </div>
                    <div className="lateral-div"/>
                </div>


                <div className="second-background">
                    <Link to="" className="link-custom">
                        <h1>{language.particleLife.mainTitle}</h1></Link>
                    <div className="row-div" id="topic3">
                        <ImagesSwitcher images={particleImages} background={"second"}/>
                        <div className="block-text">
                            <p>
                                {language.particleLife.text.split("<br/>").map((line, index) => (
                                    <Fragment key={index}>
                                        {line}
                                        <br/>
                                    </Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>


                <Footer/>
            </div>
        </div>
    )
}

export {MainPage};