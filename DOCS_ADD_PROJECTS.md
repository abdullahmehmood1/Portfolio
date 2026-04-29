# How to Add Your Projects

To add or modify projects on your portfolio website, simply edit the data in `src/data/projects.ts`.

## Step-by-Step Guide

1. **Open the Project Data File**:
   Navigate to `src/data/projects.ts` in your code editor.

2. **Add a New Project Object**:
   Add a new object to the `projects` array. Each project should follow this structure:

   ```typescript
   {
       title: 'Your Project Name',
       desc: 'A short description of what you built and why.',
       tags: ['Technology 1', 'Technology 2', '...'],
       links: { 
           demo: 'https://link-to-live-site.com', 
           code: 'https://github.com/yourusername/repo' 
       },
       gradient: 'linear-gradient(135deg, #start-color 0%, #end-color 100%)',
       accent: '#main-color',
       number: '04', // Next sequential number
   }
   ```

3. **Customize Visuals**:
   - `gradient`: This is used for the card's top background. You can use hex codes or CSS color names.
   - `accent`: This color is used for the technology tags and buttons to maintain consistency.

4. **Update the Number**:
   Ensure the `number` field (e.g., '01', '02') matches the position in your featured list.

5. **Save and Preview**:
   Save the file, and the website will automatically update with your new project!

## Example
If you want to add a "Weather App", it would look like this:

```typescript
{
    title: 'Weather Dashboard',
    desc: 'A real-time weather tracking application using OpenWeather API.',
    tags: ['React', 'API', 'Tailwind'],
    links: { demo: 'https://weather.app', code: 'https://github.com/user/weather' },
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
    accent: '#3b82f6',
    number: '04',
}
```
