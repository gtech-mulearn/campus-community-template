# µLearn Campus Community Template

![Logo](public/assets/navbar/logo.png)

### Campus Chapters are a concept that are to be implemented in-house by the Students for the Students. Campus chapters seek to bring together students within a college, developing the μLearn culture from within.

# How to Use
You need to make some changes to the given template to make it usable for your campus chapter. In a nutshell you would be having to edit the following parts of this template.

### Components
- [Navbar](/src/Components/Navbar/Navbar.jsx)
- [Footer](/src/Components/Footer/Footer.jsx)

### Pages
- [Landing](/src/Pages/Landing/Landing.jsx)


# Landing Page Edits

1. The first thing you should do is change the main heading to the name of your campus chapter.
```html
 <div className={styles.first_view_heading}>Enter Your College Name Here</div>
```

## Adding Events
1. To add an event to this template, first place the event picture (poster) in the assets folder `/assets/events/{eventname}/{filename}` .

2. You can then return to the [landing page ](/src/Pages/Landing/Landing.jsx) code. 
```jsx
<EventsCard
    image="/assets/events/event1/poster.png" //Add the path to the image here
    name="Define Hackathon" // Add the name of the event here
    description="Event Description." //Add the description of the event.
    tags={["Hackathon", "Networking"]} //Add the Tags for the event.
    registerlink="#" //Add the link for register to the event.
/>
```
3.  Changes to the events card component should be made by include all necessary information, such as
    - Event Image (From assets folder or external link)
    - Event name
    - Event description
    - Event related Tags
    - Event registration link, if upcoming event

## Adding Team Member
1. Inorder to add the details for the team members you first have to add the [team members images to the folder](/public/assets/team/) with relatable file name.
2. Then you need to make changes in the team card component Call which can be found at [landing page](/src/Pages/Landing/Landing.jsx).
```jsx
<TeamCard
    image="/assets/team/image1.png" //Add the image link here.
    name="Andrea Janet" //Add the name of the Team Member.
    linkedin="#" //LinkedIn Profile of Team Member.
    position="Web Lead" //Add the Position of the Team Member.
/>
```
3. Make changes to the above show code template by including all necessary details such as
    - Image (from assets folder or external Link)
    - Name
    - LinkedIn profile URL
    - Position in the team.


# Navbar Component Edits
 - Here in the [navbar](src/Components/Navbar/Navbar.jsx) you need add the links which are redirecting to the campus chapters socials.
```html
<a href="http://" target="_blank" rel="noopener noreferrer">
    <img
        src="/assets/navbar/twitter.png"
        alt=""
        className={styles.navbar_social}
    />
</a>
```

- Here replace `href="#"` with `href="link to social handle"`. Similarly make changes for the rest of the icons mentioned there also.

# Footer Component Edits
- Here in the [footer](/src/Components/Footer/Footer.jsx) component you are required to add the link which are 
redirecting to the campus chapters social handles.
```html
 <a href="http:// target="_blank" rel="noopener noreferrer">
    <img
        src="/assets/footer/twitter.png"
        alt=""
        className={styles.section_icon}
    />
</a>
```
- Replace `href="/#"` with `href="Link to social handle"`. Change the remaining icons mentioned there in a similar manner.
