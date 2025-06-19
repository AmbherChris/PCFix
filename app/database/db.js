export const database = [
  {
    pcType: "Desktop",
    problems: [
      {
        problem: "Slow Boot",
        problemDescription:
          "A slow boot is when your desktop PC takes an unusually long time to start up...",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "Disable Unnecessary Startup Programs",
          why: "Too many apps launching at startup can slow things down.",
          steps: [
            "Press Ctrl + Shift + Esc to open Task Manager.",
            "Go to the Startup tab.",
            "Right-click and disable unnecessary programs (like Spotify, Zoom, Adobe Updater, etc.)",
            "Restart your PC.",
          ],
          takeaways:
            "Keep antivirus and drivers enabled — disable only non-essential apps.",
        }
      },
      {
        problem: "Lagging and Freezing Screen",
        problemDescription: "problem description",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "test title",
          why: "why test",
          steps: ["steps test"],
          takeaways: "takeaway test",
        }
      },
      {
        problem: "Low Storage",
        problemDescription: "problem description",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "test title",
          why: "why test",
          steps: ["steps test"],
          takeaways: "takeaway test",
        }
      }
    ]
  },
  {
    pcType: "Laptop",
    problems: [{
        problem:"test"}
    ]
  }
];
