# µLearn Campus Community Template

![Logo](public/assets/navbar/logo.png)

### Campus Chapters are a concept that are to be implemented in-house by the Students for the Students. Campus chapters seek to bring together students within a college, developing the μLearn culture from within.

# How to Use
You need to make some changes to the given template to make it usable for your campus chapter. In a nutshell you would be having to edit the following parts of this template.

### Components
- Navbar(`/src/Components/Navbar/Navbar.jsx`)
- Footer(`/src/Components/Footer/Footer.jsx`)

### Pages
- Landing(`/src/Pages/Landing/Landing.jsx`)


# Landing Page Edits

- The first change you have to make is to change the main heading to your campus chapter name.
```
 <div className={styles.first_view_heading}>Enter Your College Name Here</div>
```
- The next edit you would have to make is to add the link for joining your campus chapter inside the a tag.
```
<a href="Enter Link Here" target="_blank" rel="noopener noreferrer">
    <button className={styles.join_campus_button}>
        Join Us <img src="/assets/button.png" alt="" />
    </button>
</a>

```

## Adding Events
- In order to add an event to this template you would first have to add the image for the event(poster) in the assets folder `/assets/events/{eventname}/{filename}`
- After that you can return back to the Landing Page Code at `/src/Pages/Landing/Landing.jsx`. 
```
<EventsCard
    image="/assets/events/event1/poster.png" //Add the path to the image here
    name="Define Hackathon" // Add the name of the event here
    description="Event Description." //Add the description of the event.
    tags={["Hackathon", "Networking"]} //Add the Tags for the event.
    registerlink="#" //Add the link for register to the event.
/>
```
- Make changes to the EventsCard Component by providing all the necesary details required such as
    - Event Image(From Assets Folder/Or External Link)
    - Event Name
    - Event Description
    - Event Related Tags
    - Event Registration Link(If Upcoming Event)

## Adding Team Member
- Inorder to add the details for the Team Members you first have to add the team members images to the folder `/public/assets/team/` with relatable file name.
- Then you need to make changes in the TeamCard Component Call which can be found at `/src/Pages/Landing/Landing.jsx`
```
<TeamCard
    image="/assets/team/image1.png" //Add the image link here.
    name="Andrea Janet" //Add the name of the Team Member.
    linkedin="#" //LinkedIn Profile of Team Member.
    position="Web Lead" //Add the Position of the Team Member.
/>
```
- Make changes to the Above show Code Template by adding in all the necessary details required such as
    - Image(From Assets Folder or External Link)
    - Name
    - LinkedIn Profile URL
    - Position in the Team.


# Navbar Component Edits
- The above mentioned navbar component can be found at `/src/Components/Navbar/Navbar.jsx`. Here in the Navbar you need add the links which are redirecting to the campus chapters socials.
```
<a href="http://" target="_blank" rel="noopener noreferrer">
    <img
        src="/assets/navbar/twitter.png"
        alt=""
        className={styles.navbar_social}
    />
</a>
```

- Here replace `href="#"` with `href="Link to Social Handle"` . Similarly make changes for the rest of the icons mentioned there also.

# Footer Component Edits
- The above mentioned footer component can be found at `/src/Components/Footer/Footer.jsx`. Here in the Footer component you are required to add the link which are 
redirecting to the campus chapters social handles.
```
 <a href="http:// target="_blank" rel="noopener noreferrer">
    <img
        src="/assets/footer/twitter.png"
        alt=""
        className={styles.section_icon}
    />
</a>
```
- Here replace `href="#"` with `href="Link to Social Handle"` . Similarly make changes for the rest of the icons mentioned there also.
