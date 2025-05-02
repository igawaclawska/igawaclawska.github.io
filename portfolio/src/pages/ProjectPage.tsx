import { useLayoutEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./ProjectPage.module.css";
import landingPageOld from "../assets/landing-page-old.png";
import landingPageNew from "../assets/landing-page-new.png";
import registerOld from "../assets/register-old.png";
import registerStep1New from "../assets/register-step1-new.png";
import registerStep2New from "../assets/register-step2-new.png";
import installExtensionOld from "../assets/install-extension-old.png";
import extensionInstalledOld from "../assets/extension-installed-old.png";
import emptyHomepageOld from "../assets/empty-homepage-old.png";
import selectInterests from "../assets/select-interests.png";
import excludeWords from "../assets/exclude-words.png";
import installExtensionNew from "../assets/install-extension-new.png";
import extensionInstalledNew from "../assets/extension-installed-new.png";
import settingsOld from "../assets/settings-old.png";
import settingsNew from "../assets/settings-new.png";

const ProjectPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    "React",
    "JavaScript",
    "CSS",
    "Styled Components",
    "HTML",
  ];

  return (
    <>
      <title>Project</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <div className={styles.coverContainer}>
            <h1>Zeeguu: Frontend&nbsp;Optimization and UI&nbsp;Improvements</h1>
            <p className={styles.subheadline}>
              Contributing to the front-end development of the Zeeguu language
              learning platform, with a focus on accessibility enhancements,
              responsive UI components, intuitive onboarding flows, and overall
              user interface improvements. Optimizing front-end performance
              while refining a mobile-first, component-based architecture to
              enhance scalability, visual consistency, and user experience. The
              project is ongoing, with additional examples to be added as
              development&nbsp;progresses.
            </p>
            {technologies.length > 0 && (
              <div className={styles.technologies}>
                {technologies.map((tech, index) => (
                  <span key={index} className={styles.technology}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Section>
        <Section backgroundType="medium">
          <Heading alignment="center" level={2} isUnderlined={true}>
            Hero Section
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={landingPageOld}
                    alt={`Zeeguu desktop landing page hero section before redesign. 
                  At the top, an orange bar contains the Zeeguu logo on the left and language toggle buttons for Danish and English on the right, 
                  shown with circular flags. Centered below is a large orange elephant logo, followed by the project name ‘Zeeguu’ in bold orange text. 
                  A description states: ‘A research project aiming to personalize reading and vocabulary practice in foreign languages.’
                  Below are two centered buttons: an orange ‘Log in’ button and an outlined ‘Become a Betatester!’ button.`}
                  />
                  <figcaption>
                    The value proposition of the platform was ambiguous. A
                    visually prominent Login button next to a less noticeable
                    Registration button with unclear wording, led users to
                    mistakenly click Login&nbsp;first.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={landingPageNew}
                    alt="Zeeguu desktop landing page hero section before redesign. Main heading says: ‘Learn a language by reading what you love and improve your vocabulary.’ Subheading explains: ‘Find interesting articles, translate words as you read, and use spaced repetition to remember them.’ Below, a button labeled ‘Start Learning.’ Language selection options include Danish, Dutch, French, Italian, Swedish, Romanian, and Spanish. Top of the page includes the Zeeguu logo and two navigation links: ‘Log In’ and ‘Register.’"
                  />
                  <figcaption>
                    A clear value proposition highlights all the benefits users
                    gain from using the platform. The registration button is
                    more visually prominent, with concise and clear wording. The
                    list of available languages provides a transparent overview
                    of the learning&nbsp;options.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <Heading alignment="center" level={2} isUnderlined={true}>
            Registration
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={registerOld}
                    alt="Zeeguu desktop registration screen with an orange background. A centered white card displays a white elephant logo, a 'Create Account' heading,input fields for Invite Code, Name, Email, and Password, followed by dropdowns for Learned Language, 
                Level in Learned Language, and Base Language (English Recommended). Below is a 17-line privacy notice and a 'Create Account' button at the bottom."
                  />
                  <figcaption>
                    Unclear labeling on input fields and dropdowns caused
                    confusion, and inconsistent styling affected the overall
                    experience. The abundance of options and content could feel
                    overwhelming, and the "Create account" button was difficult
                    to find - particularly on small laptop screens and
                    mobile&nbsp;devices.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={registerStep1New}
                    alt="Zeeguu desktop registration screen - step 1. Language selection form with three dropdown inputs: one for selecting the language to learn, another for current proficiency level, and a third for preferred translation language. The form is displayed on a white card against an orange background. At the top, there's a notice about needing an invite code to continue registration, with the zeeguu.team@gmail.com contact email provided. A prominent 'Next' button appears at the bottom, along with a 'Log In' link for existing users."
                  />
                  <figcaption>
                    User Registration - Step 1: Language selection allows users
                    to select their practiced languages. The dropdown labels
                    have clearer, more user-friendly&nbsp;descriptions.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={registerStep2New}
                    alt="Zeeguu desktop registration screen - step 2. Beta account creation form on a white card against an orange background. The form includes fields for: invite code with a note to request one at zeeguu.team@gmail.com, full name input, email address input, and password fields with a minimum 4-character requirement. At the bottom is a checkbox to agree to the Privacy Notice, followed by a prominent 'Create Account' button in orange. Below the form is a 'Log In' link for existing users."
                  />
                  <figcaption>
                    User Registration - Step 1: This step focuses on the account
                    creation process. Input fields have a consistent visual
                    style matching the dropdowns from step one, and include
                    clearer instructions - such as the required
                    password&nbsp;length.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundType="medium">
          <Heading alignment="center" level={2} isUnderlined={true}>
            User Onboarding Flow
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={installExtensionOld}
                    alt="Zeeguu browser extension installation page on a white card with a cream background. The page is titled 'Welcome to Zeeguu' with a subtitle 'Time to install the Zeeguu Reader browser extension'. The content explains that users can access words, article recommendations, and exercises on zeeguu.org, but only for articles shared by teachers or saved via the extension. Three key features are listed: one-click translation and pronunciation, removal of excess clutter from articles, and generation of personalized vocabulary exercises. Two prominent buttons are displayed: 'Install for Chrome or Edge' and 'Install for Firefox'. At the bottom, there's a link stating 'Don't want the extension? Go to articles.'"
                  />
                  <figcaption>
                    User Onboarding - Step 1: Users were introduced to the
                    platform’s main features and prompted to install the browser
                    extension, which enables key functionalities like
                    translations and pronunciation. However, this step also
                    appeared on mobile and unsupported browsers, which caused
                    confusion. Additionally, the large amount of information
                    contributed to cognitive overload.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={extensionInstalledOld}
                    alt="Zeeguu extension installation confirmation page with a white background. The page displays 'Extension is installed!' at the top, followed by a heading 'Pin it to the toolbar to make it easy to access'. Below is a link to 'Learn how it works by watching this video'. The main content shows a screenshot of Wikipedia's Chrome Web Store page with the Zeeguu extension icon visible in the browser's toolbar. At the bottom is an orange button labeled 'Go to article recommendations' which spans the full width of the content area."
                  />
                  <figcaption>
                    User Onboarding - Step 2: Confirmed the successful
                    installation of the Zeeguu browser extension. An animation
                    demonstrated how to activate the extension, but its busy
                    visuals distracted from the core message.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={emptyHomepageOld}
                    alt="Zeeguu empty homepage showing navigation and search interface. Top navigation displays 'Recommended | Saved' tabs, with 'Recommended' being active. Below are 'Interests' and 'Non-interests' filter buttons, followed by a search bar labeled 'Search all articles' with a magnifying glass icon. A 'Sort by:' dropdown offers 'Length' and 'Level' options. The main content area shows a message: 'We can not find articles in the language you want to study and for your current interests. Consider changing your interests. Alternatively read articles with the help of the Zeeguu browser extension. You can also add articles to My Texts through the Save article to Zeeguu.org button from within the extension.' The left sidebar contains navigation links for Home, Words, Exercises, History, Statistics, Teacher Site, Settings, and Logout, with an orange elephant logo at the top."
                  />
                  <figcaption>
                    The home screen appeared empty due to the lack of initial
                    customization, which could give users the misleading
                    impression that something was broken.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={selectInterests}
                    alt="Zeeguu interests selection page showing a white card on an orange background. At the top is an orange elephant logo followed by the heading 'What would you like to read about?' Below are seven topic buttons arranged in three rows: 'Business' and 'Culture & Art' in the first row, 'Politics', 'Sports', and 'Technology & Science' in the second row, and 'Travel & Tourism' in the third row. Some topics are outlined in grey while others have an orange fill, indicating selected state. At the bottom is reassuring text 'You can always change it later' followed by a prominent orange 'Next' button with an arrow icon."
                  />
                  <figcaption>
                    User Onboarding - Step 1: Hobby selection allows users to
                    personalize the content they will see after creating an
                    account.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={excludeWords}
                    alt="Zeeguu word exclusion setup page showing a white card on an orange background. At the top is an orange elephant logo, followed by the heading 'Would you like to exclude articles and exercises containing particular words or phrases?' Below is a text input field with placeholder text 'E.g. robbery' and a plus button to its right. Helper text underneath reads 'Add one unwanted word or phrase at a time'. At the bottom of the card is reassuring text 'You can always change it later' and a prominent 'Next' button with an arrow icon."
                  />
                  <figcaption>
                    User Onboarding - Step 2: Keyword exclusion lets users hide
                    content they may find triggering, helping create a safer and
                    more personalized experience from the first use.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={installExtensionNew}
                    alt="Zeeguu browser extension installation page showing a white card on an orange background. At the top is an orange elephant logo above the heading 'Read and translate foreign articles with the Zeeguu browser extension'. The center features an illustration demonstrating the extension's functionality, showing highlighted words 'artists', 'a museum', and 'or' with toggle switches for 'See translation' and 'Hear pronunciation'. Below, there's text explaining browser compatibility: 'The Chrome Web Store extension also works in Edge, Opera, Arc, Vivaldi, Brave and other Chromium based browsers.' At the bottom is a prominent 'Install from Chrome Web Store' button with an arrow icon, followed by an 'I will install it later' link."
                  />
                  <figcaption>
                    User Onboarding - Step 3 (desktop only): Users are
                    introduced to and prompted to install the browser extension,
                    which is essential for accessing key platform features such
                    as translations and pronunciation. A button redirects them
                    to the correct extension store based on their browser.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={extensionInstalledNew}
                    alt="Zeeguu extension installation success page showing a white card on an orange background. At the top is an orange elephant logo followed by the heading 'Right-click anywhere on any article's page to access the Zeeguu extension'. The center features an illustration demonstrating the right-click functionality, showing a webpage with a popup menu and cursor. Below the illustration, there's a prominent orange button labeled 'Go to Zeeguu' at the bottom of the card."
                  />
                  <figcaption>
                    User Onboarding - Step 4 (desktop only): Confirms the
                    successful installation of the Zeeguu browser extension.
                    Introduces users to activating the extension via right-click
                    functionality.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <Heading alignment="center" level={2} isUnderlined={true}>
            Settings
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={settingsOld}
                    alt="Zeeguu settings page with an orange sidebar. The main content area shows a settings form with the following fields: Name (input field), Email (input field), Learned Language (dropdown showing Danish), Level in Learned Language (dropdown), Native Language (dropdown showing Polish), and System Language (dropdown showing English). Below these fields is an orange 'Save' button. At the bottom is a section showing 'Your current class is: Zeeguu Betatesters' with a 'Change Class' option that includes an input field for a new invite code and an orange 'Change Class' button."
                  />
                  <figcaption>
                    Settings options were not grouped by theme, making
                    navigation difficult. UI components appeared visually
                    inconsistent and behaved unpredictably. The overall layout
                    lacked scalability, making it challenging to&nbsp;add new
                    options in the&nbsp;future.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <div className={styles.imagesColumn}>
                <figure>
                  <img
                    className={styles.exampleImage}
                    src={settingsNew}
                    alt="Redesigned Zeeguu settings page with an orange sidebar containing navigation links. The main content area is organized into four sections: 'My Account' with 'Profile Details' and 'Language Settings' options, 'Reading Preferences' containing 'Interests' and 'Excluded Keywords' options, 'Exercises' with 'Exercise Type Preferences', and 'Account Management' with a 'Delete Account' option. Each option is presented as a clickable card with a right arrow icon, indicating they lead to detailed settings pages. The layout is clean and hierarchical, with clear section headings in gray text."
                  />
                  <figcaption>
                    Settings options are now grouped by theme, with each option
                    placed on a separate screen. This reduces visual clutter and
                    creates space for adding more options in the future.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default ProjectPage;
