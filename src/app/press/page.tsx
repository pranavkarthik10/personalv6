"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Press() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'}`}>
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-400'}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-pink-500' : 'bg-indigo-400'}`}></div>
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 z-50 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} className="text-slate-800" /> : <Sun size={20} className="text-yellow-300" />}
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Back button */}
        <Link 
          href="/"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
        >
          <ArrowLeft size={16} />
          <span className="font-medium">Back</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Press/Media
          </h1>
          <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
            Where I&apos;ve been featured on so far.
          </p>
        </header>

        {/* Media logos table */}
        <section className="mb-16">
          <div className={`p-8 rounded-2xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/20'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-4 text-center">
                      <a 
                        href="https://www.omnitv.ca/ab/en/videos/pranav-karthik-coding-prodigy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Omni_TV_2018.svg/1200px-Omni_TV_2018.svg.png" 
                          alt="OMNI" 
                          className="mx-auto"
                          style={{width: '200px', height: '81px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://bc.ctvnews.ca/vancouver-teen-coding-phenom-using-skills-for-good-1.4995106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://static.themebuilder.aws.arc.pub/bellmediainc/1730923620658.svg" 
                          alt="CTVNews" 
                          className="mx-auto"
                          style={{width: '200px', height: '32px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://dailyhive.com/vancouver/apple-wwdc20-conference-winners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://assets.dailyhive.com/assets/2.1.1/static/svg/logos/venture-logo.svg" 
                          alt="VentureVan" 
                          className="mx-auto"
                          style={{width: '200px', height: '52px'}}
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-center">
                      <a 
                        href="https://viewthevibe.com/canadian-representation-game-strong-wwdc20s-swift-student-challenge-winners/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://cdn-ladpd.nitrocdn.com/xgHTFPcYUVXJVMRxhskpKxBqXOHxVKLi/assets/images/optimized/rev-00bc96e/viewthevibe.com/wp-content/uploads/2022/03/ViewtheVIBE_logotype_RASBS_K_reduced.png" 
                          alt="ViewTheVibe" 
                          className="mx-auto"
                          style={{width: '200px', height: '50px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://mobilesyrup.com/2020/06/15/canadian-ios-app-developers-covid-19-pandemic-ipnos-ko_op-manavata-maple/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://mobilesyrup.com/wp-content/themes/mobilesyrup2021/images/ms-logo.svg" 
                          alt="MobileSyrup" 
                          className="mx-auto"
                          style={{width: '200px', height: '34px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://www.citynews1130.com/2020/06/13/vancouver-teen-app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/CityNews_1130_Logo.svg/2560px-CityNews_1130_Logo.svg.png" 
                          alt="News1130" 
                          className="mx-auto"
                          style={{width: '200px', height: '78px'}}
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-center">
                      <a 
                        href="http://owlconnected.com/archives/interview-canadian-coding-wunderkid-pranav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="http://owlconnected.com/wp-content/uploads/2016/03/owlconnected-1.png" 
                          alt="OwlConnected" 
                          className="mx-auto"
                          style={{width: '200px', height: '34px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://www.geekwire.com/2019/pranav-karthik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://cdn.geekwire.com/wp-content/uploads/2015/02/GeekWire-logo-transparent.png" 
                          alt="GeekWire" 
                          className="mx-auto"
                          style={{width: '200px', height: '45px'}}
                        />
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a 
                        href="https://dailyhive.com/vancouver/apple-ceo-tim-cook-shout-out-vancouver-teen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-transform hover:scale-105"
                      >
                        <img 
                          src="https://assets.dailyhive.com/assets/2.3.0/static/svg/logos/dailyhive-logo.svg" 
                          alt="DH" 
                          className="mx-auto"
                          style={{width: '200px', height: '50px'}}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed press list */}
        <section>
          <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
            View all
          </h2>
          
          <div className="space-y-8">
            {/* 2021 */}
            <div className={`p-8 rounded-2xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/20'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>2021</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="http://owlconnected.com/archives/interview-canadian-coding-wunderkid-pranav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    OWL CONNECTED
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- February 2021</span>
                </li>
              </ul>
            </div>

            {/* 2020 */}
            <div className={`p-8 rounded-2xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/20'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>2020</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.omnitv.ca/ab/en/videos/pranav-karthik-coding-prodigy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    OMNI TV
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://bc.ctvnews.ca/vancouver-teen-coding-phenom-using-skills-for-good-1.4995106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    CTV Vancouver: Vancouver teen coding phenom using skills for good
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://dailyhive.com/vancouver/apple-wwdc20-conference-winners"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    DailyHive: Canadian Students
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://viewthevibe.com/canadian-representation-game-strong-wwdc20s-swift-student-challenge-winners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Canadian Representation Game Strong: WWDC20&apos;s Swift Student Challenge Winners
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://dailyhive.com/vancouver/canadian-winners-apple-wwdc20-swift-student-challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    DailyHive: Meet the 11 Canadian students who won Apple&apos;s Swift Challenge
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://mobilesyrup.com/2020/06/15/canadian-ios-app-developers-covid-19-pandemic-ipnos-ko_op-manavata-maple/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    MobileSyrup
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://www.citynews1130.com/2020/06/13/vancouver-teen-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    News1130
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2020</span>
                </li>
                <li>
                  <a 
                    href="https://getconnectedmedia.com/app-show-video-podcast-tech-hoarders-unite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    GetConnected Podcast
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- May 2020</span>
                </li>
                <li>
                  <a 
                    href="https://dailyhive.com/vancouver/apple-wwdc20-student-scholarship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    DailyHive: WWDC - Where they are now?
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- May 2020</span>
                </li>
                <li>
                  <a 
                    href="https://www.vsb.bc.ca/News/_layouts/15/ci/post.aspx?oaid=2066f1d2-75af-4174-b4f8-8b5c35aac1f3&oact=20001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Vancouver School Board: Google Code-In
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- May 2020</span>
                </li>
                <li>
                  <a 
                    href="https://medium.com/turkishkit/ba%C5%9Far%C4%B1-hikayesi-pranav-karthik-57539fe7be43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    TurkishKit Blog
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- March 2020</span>
                </li>
              </ul>
            </div>

            {/* 2019 */}
            <div className={`p-8 rounded-2xl backdrop-blur-md border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/20'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>2019</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.geekwire.com/2019/best-ways-manage-everyday-work-life-tips-tricks-2019-geeks-week/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    GeekWire Time Management
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- Dec 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.vsb.bc.ca/News/_layouts/15/ci/post.aspx?oaid=61e8579f-ba7a-4571-98b3-eefdc8b50e34&oact=20001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Vancouver School Board: WWDC
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://dailyhive.com/vancouver/apple-ceo-tim-cook-shout-out-vancouver-teen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    DailyHive
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.journaldemontreal.com/a-13-ans-ce-developpeur-canadien-attire-lattention-dapple"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Journal de Montreal
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.btvancouver.ca/videos/apples-worldwide-developer-conference/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Live TV on Breakfast Television Vancouver
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.omnitv.ca/bc/pa/videos/pranav-karthik-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    Live TV on Omni Punjabi
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.btvancouver.ca/videos/13-year-old-coder-gets-apple-ceos-attention/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    CityNews
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/tim_cook/status/1135700109931343872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    By Tim Cook on Twitter
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- June 2019</span>
                </li>
                <li>
                  <a 
                    href="https://www.geekwire.com/2019/pranav-karthik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg hover:underline ${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    GeekWire&apos;s Geek of the Week
                  </a>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>- May 2019</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
