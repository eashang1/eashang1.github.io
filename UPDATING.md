# How to Update Your Website

Your website is now modularized! You can easily update papers and projects by editing a single file: **`data.js`**

## Adding or Updating Papers

Open `data.js` and edit the `papers` array:

```javascript
papers: [
    {
        title: "Your Paper Title",
        authors: "Eashan Gandotra", // or "Eashan Gandotra, Co-Author Name"
        venue: "Institution/Conference, Year",
        description: "Brief description of what the paper covers.",
        pdf: "papers/your-paper-filename.pdf",
        links: [] // Optional additional links
    }
]
```

### Adding Extra Links (Optional)

If you want to add arXiv, code, or other links:

```javascript
links: [
    {text: "Code", url: "https://github.com/..."},
    {text: "arXiv", url: "https://arxiv.org/..."}
]
```

## Adding Projects

Open `data.js` and add to the `projects` array:

```javascript
projects: [
    {
        title: "ML Techniques Study Guide",
        description: "A comprehensive guide covering common machine learning techniques and algorithms. Includes practical examples and implementation details in Python.",
        github: "https://github.com/eashang1/ml-study-guide"
        // Optional: demo: "https://demo-url.com"
    }
]
```

### Example with Multiple Projects

```javascript
projects: [
    {
        title: "ML Techniques Study Guide",
        description: "A comprehensive guide covering ML techniques and algorithms with practical examples in Python.",
        github: "https://github.com/eashang1/ml-study-guide"
    },
    {
        title: "Competition Math Solver",
        description: "An automated solver for olympiad-style math problems using symbolic computation.",
        github: "https://github.com/eashang1/math-solver",
        demo: "https://math-solver-demo.com"
    }
]
```

## File Structure

```
eashang1.github.io/
├── index.html          # Main HTML (don't edit for content updates)
├── style.css           # Styling (don't edit for content updates)
├── script.js           # JavaScript logic (don't edit for content updates)
├── data.js             # ← EDIT THIS FILE to update papers/projects
├── papers/             # Place your PDF files here
├── resume/             # Place your resume PDF here
└── profile.jpg         # Your profile photo
```

## That's It!

Just edit `data.js` and refresh your browser. No need to touch HTML anymore!
