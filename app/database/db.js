export const database = [
  {
    pcType: "Desktop",
    problems: [
      {
        problem: "Slow Boot",
        image: "/slowBoot.png",
        problemDescription:
          "A slow boot is when your desktop PC takes an unusually long time to start up...",
      
        stepsInfo: [
          {
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
          },
          {
            stepNumber: "2",
            stepTitle: "Scan for Malware",
            why: "Malware or adware can quietly slow down boot and system performance.",
            steps: [
              "Open Windows Security (Start → type “Windows Security”).",
              "Go to Virus & Threat Protection",
              "Click Quick Scan or choose Full Scan for deeper results",
              "Optionally, download and run Malwarebytes Free for second-opinion malware checks"
            ],
            takeaways: "Malware can significantly delay boot time — regular scans help keep your system clean and fast.",
          },
          {
            stepNumber: "3",
            stepTitle: "Turn Fast Startup On or Off (Test Both)",
            why: "Fast Startup helps some PCs boot faster, but can cause issues on others.",
            steps: [
              "Open Control Panel → Power Options",
              "Click Choose what the power buttons do.",
              "Click Change settings that are currently unavailable.",
              "Check or uncheck Turn on fast startup",
              "Save changes and restart your PC."
            ],
            takeaways: "Try toggling Fast Startup — it helps many systems but causes boot delays on others. Stick with what works best on your setup.",
          },
          {
            stepNumber: "4",
            stepTitle: "Upgrade to an SSD (if using HDD)",
            why: "HDDs are much slower than SSDs for booting and loading Windows.",
            steps: [
              "Buy a SATA or NVMe SSD (e.g., Samsung 870 EVO, Crucial MX500).",
              "Use free cloning software like Macrium Reflect to copy your OS.",
              "Swap the drive physically or add it as your main boot drive.",
              "CChange boot order in BIOS if needed."
            ],
            takeaways: "SSDs can reduce boot time from 2+ minutes to 15 seconds — it's the single biggest upgrade you can make.",
          },
          {
            stepNumber: "5",
            stepTitle: "Free Up Disk Space",
            why: "A nearly full C: drive slows down boot, updates, and performance.",
            steps: [
              "Press Win + R → type cleanmgr → hit Enter.",
              "Select Drive C: → Check all options (including Windows Update Cleanup).",
              "Click OK to delete temporary files.",
              "Go to Settings → Apps → Installed apps",
              "Uninstall unused or bloated programs"
            ],
            takeaways: "Windows needs free space to function properly. Keep at least 10–20% of your main drive free.",
          },
          {
            stepNumber: "6",
            stepTitle: "Update Windows and Drivers",
            why: "Outdated drivers or system bugs can cause delays and boot loops.",
            steps: [
              "Go to Settings → Windows Update → Click Check for Updates.",
              "Update everything available.",
              "In Device Manager, right-click key items (GPU, chipset, network) → Click Update Driver." 
            ],
            takeaways: "Always keep Windows and drivers updated to avoid performance issues and conflicts at boot.",
          },
          {
            stepNumber: "7",
            stepTitle: "Optimize BIOS/UEFI Settings",
            why: "BIOS may spend time checking unnecessary devices before booting.",
            steps: [
              "Restart your PC and enter BIOS/UEFI (Del, F2, or Esc at boot).",
              "Find and enable Quick Boot or Fast Boot.",
              "Set the main SSD or boot drive as the first boot device.",
              "Disable boot from network, USB, or DVD (unless needed)"
            ],
            takeaways: "BIOS tweaks can cut seconds off pre-boot time and avoid device scan delays.",
          },
          {
            stepNumber: "8",
            stepTitle: "Disable Unnecessary Services (Advanced)",
            why: "Background services can delay startup.",
            steps: [
              "Press Win + R → type msconfig → hit Enter",
              "Go to the Services tab",
              "Check Hide all Microsoft services",
              "Uncheck obvious non-essential ones (e.g., Adobe, Google Update, Logitech, etc.).",
              "Apply and restart"
            ],
            takeaways: "This is advanced — don’t disable drivers or critical services. Use with care, but can speed up boot.",
          },
        ],
      },
      {
        problem: "Lagging and Freezing Screen",
        image: "/laggingAndFreezingScreen.png",
        problemDescription: "problem description",
        stepsInfo: [
          {
            stepNumber: "1",
            stepTitle: "Close Background Processes",
            why: "Too many apps and processes compete for CPU, memory, and disk — causing lag or freezing.",
            steps: [
              "Press Ctrl + Shift + Esc to open Task Manager.",
              "Go to Processes tab.",
              "Sort by CPU, Memory, and Disk usage.",
              "Right-click and End Task on anything unnecessary(like Google Chrome (if too many tabs), OneDrive sync, Discord, Zoom, Dropbox)."
            ],
            takeaways: "Closing background apps frees up system resources instantly. Always keep browsers and large programs closed when not in use.",
          },
          {
            stepNumber: "2",
            stepTitle: "Check for High Disk Usage (100%)",
            why: "If your disk is at 100%, your system will lag or hang.",
            steps: [
              "In Task Manager, check Disk column for 100% usage",
              'If "Service Host: SysMain" is causing high disk usage, press Win + R, type services.msc, find SysMain, right-click → Stop → set Startup type to Disabled.',
              "Disable Windows Search (optional): same steps → find Windows Search → Disable",
              ""
            ],
            takeaways: "SysMain and Windows Search can over-index your disk — disabling them helps older systems with HDDs.",
          },
          {
            stepNumber: "3",
            stepTitle: "Update Graphics Drivers",
            why: "Outdated or broken GPU drivers can cause screen flickers, freezing, or lag.",
            steps: [
              "Press Win + X → Device Manager",
              "Expand Display Adapters",
              "Right-click your GPU → Update driver, or visit the NVIDIA, AMD, or Intel website to download the latest version.",
             
            ],
            takeaways: "Your graphics driver controls screen rendering — always keep it current for stability and performance.",
          },
          {
            stepNumber: "4",
            stepTitle: "Scan for Malware",
            why: "Malware or crypto miners often cause slowdowns, freezing, and lag.",
            steps: [
              "Open Windows Security → Virus & Threat Protection → Full Scan",
              "Or use Malwarebytes Free",
     
            ],
            takeaways: "Even if it’s not a virus, adware or mining malware can crush performance.",
          },
          {
            stepNumber: "5",
            stepTitle: "Check RAM Usage",
            why: "Low available RAM can cause apps and Windows itself to hang or become unresponsive.",
            steps: [
              "In Task Manager, check the Memory column",
              "If RAM usage is near 90–100%, close heavy apps and consider adding more RAM if you have less than 8 GB.",
              "Turn off startup apps that preload in RAM (see Step 1 in boot guide)",
            ],
            takeaways: "Modern Windows needs 8 GB minimum, 16 GB recommended. Low RAM is a top cause of freezing.",
          },
          {
            stepNumber: "6",
            stepTitle: "Run System File Checker (SFC)",
            why: "Corrupt system files can cause erratic performance or screen freezes.",
            steps: [
              "Press Win + S → search “Command Prompt” → right-click → Run as Administrator",
              "Type: sfc /scannow",
              "Let it scan and fix file errors (takes ~10 mins)",
            ],
            takeaways: "SFC restores broken system files that may be behind mysterious lag or crashes.",
          },
        ],
      },
      {
        problem: "Low Storage",
        image: "/lowStorage.png",
        problemDescription: "problem description",
        stepsInfo: [
          {
            stepNumber: "1",
            stepTitle: "Check Drive Space",
            why: "You need to confirm how low your disk space really is before acting.",
            steps: [
              "Press Win + E to open File Explorer",
              "Right-click on Local Disk (C:) → Click Properties",
              "Check how much free space is available",
           
            ],
            takeaways: "If you have less than 10–20% free, Windows will struggle to operate efficiently — time to clean up.",
          },
          {
            stepNumber: "2",
            stepTitle: "Run Disk Cleanup",
            why: "Temporary files, logs, and old updates take up valuable space.",
            steps: [
              "Press Win + R → type cleanmgr → Enter",
              "Select Drive C: → Check all boxes (especially Temporary files, Windows Update Cleanup)",
              "Click OK → Confirm deletion",
       
            ],
            takeaways: "Disk Cleanup is safe and easy — you can recover several GBs in just a minute or two.",
          },
          {
            stepNumber: "3",
            stepTitle: "Enable Storage Sense",
            why: " Storage Sense automatically deletes unnecessary files regularly.",
            steps: [
              "Go to Settings → System → Storage",
              "Click Storage Sense → Turn it On",
              "Click Configure to schedule regular cleanup (daily/weekly)",
            
            ],
            takeaways: "Storage Sense is a “set it and forget it” feature to prevent future space issues.",
          },
          {
            stepNumber: "4",
            stepTitle: "Uninstall Unused Programs",
            why: "Old or large programs (especially games or media apps) can eat up space fast.",
            steps: [
              "Go to Settings → Apps → Installed apps",
              "Sort by Size",
              "Click and Uninstall programs you no longer use",
           
            ],
            takeaways: "Target large apps like games, editing tools, or bundled software — this often frees up gigabytes instantly.",
          },
          {
            stepNumber: "5",
            stepTitle: "Empty Recycle Bin and Downloads Folder",
            why: "Files in these folders still take up disk space until manually deleted.",
            steps: [
              "Right-click the Recycle Bin on your desktop → Click Empty Recycle Bin",
              "Open your Downloads folder → Delete files you don’t need",
           
            ],
            takeaways: "These two folders often hide gigabytes of forgotten files — clear them regularly.",
          },
          {
            stepNumber: "6",
            stepTitle: "Move Large Files to External or Cloud Storage",
            why: "Videos, photos, and installers can take up huge space unnecessarily.",
            steps: [
              "Identify large files in Documents, Pictures, or Videos folders",
              "Move them to a USB drive, external HDD/SSD, or upload to Google Drive/OneDrive",

            ],
            takeaways: "Storing media externally gives you space back without losing anything important.",
          },
          {
            stepNumber: "7",
            stepTitle: "Use WinDirStat or TreeSize to Find Space Hogs",
            why: "These tools visualize what's eating space, including hidden folders.",
            steps: [
              "Download and install WinDirStat (https://windirstat.net/)",
              "Run it on your C: drive → Sort by file/folder size",
              "Delete or move non-critical large files",
          
            ],
            takeaways: "You can’t clean what you can’t see — disk visualizers show you exactly where the big stuff hides.",
          },
          {
            stepNumber: "8",
            stepTitle: "Compress or Move Installed Apps (Advanced)",
            why: "Some apps can be moved or compressed to free space without uninstalling.",
            steps: [
              "Open Settings → Apps → Installed apps",
              "Click an app → Move (only available for apps installed from Microsoft Store)",
              "Alternatively, enable NTFS compression on folders via right-click → Properties → Advanced",
           
            ],
            takeaways: "Moving or compressing apps is optional but helps squeeze out extra space if you can’t uninstall anything.",
          },
        
        ]
      },
      {
        problem: "No Display",
        image: "/noDisplay.png",
        problemDescription: "problem description",
        stepsInfo: [
          {
            stepNumber: "1",
            stepTitle: "Check Monitor and Cable Connections",
            why: "Loose, unplugged, or damaged cables are a common cause of no display.",
            steps: [
              "Make sure the monitor is powered on.",
              "Reseat or replace the HDMI/DisplayPort/VGA cable.",
              "Try a different port on your graphics card or motherboard.",
              "Try a different monitor if available."
            ],
            takeaways: "Always rule out display and cable issues first — they're often the simplest fix.",
          },
          {
            stepNumber: "2",
            stepTitle: "Power Cycle Your PC",
            why: "A full power reset can clear temporary glitches or BIOS bugs.",
            steps: [
              "Shut down your PC completely.",
              "Unplug the power cable (and laptop battery if applicable).",
              "Hold the power button for 10–15 seconds.",
              "Reconnect power and try turning it on again."
            ],
            takeaways: "Power cycling drains residual electricity and can clear out stuck hardware states.",
          },
          {
            stepNumber: "3",
            stepTitle: "Check RAM and Reseat It",
            why: "Improperly seated or faulty RAM prevents the system from posting to display.",
            steps: [
              "Power off the PC.",
              "Open the case.",
              "Remove all RAM sticks.",
              "Reinsert them firmly, one at a time, into the correct slots (refer to motherboard manual)."
            ],
            takeaways: "RAM issues are one of the most common reasons for a PC powering on but showing no image.",
          },
          {
            stepNumber: "4",
            stepTitle: "Check GPU (Graphics Card) Connection",
            why: "A loose or faulty graphics card will result in no video output.",
            steps: [
              "If you have a dedicated GPU, power off and unplug the PC.",
              "Remove the GPU and reseat it properly in its PCIe slot.",
              "Make sure any necessary power connectors are attached.",
              "If no dedicated GPU, connect the monitor to the motherboard’s video output."
            ],
            takeaways: "Reseating or removing the GPU can restore video — and using onboard graphics helps isolate GPU issues.",
          },
          {
            stepNumber: "5",
            stepTitle: "Listen for Beep Codes or Indicator LEDs",
            why: "Most motherboards use beeps or diagnostic LEDs to point to faulty components.",
            steps: [
              "Make sure your PC speaker (or motherboard LED) is connected.",
              "Count the beeps or check LED status — refer to your motherboard manual.",
              "Common patterns indicate issues with RAM, GPU, or CPU.",
           
            ],
            takeaways: "Beep codes and LEDs give you quick insight into what’s failing during boot.",
          },
          {
            stepNumber: "6",
            stepTitle: "Clear the CMOS / Reset BIOS",
            why: "Corrupted BIOS settings can prevent display or system POST.",
            steps: [
              "Power off the PC and unplug it.",
              "Locate the CMOS battery on the motherboard (a small silver coin battery).",
              "Remove it for 30 seconds, then reinsert.",
              "Or, use the CMOS reset jumper (check motherboard manual)."
            ],
            takeaways: "Clearing the CMOS resets hardware configuration — a common fix for display and POST failures.",
          },
          {
            stepNumber: "7",
            stepTitle: "Try Booting With Minimal Hardware",
            why: "Lights and fans working don’t mean the system is healthy — no POST means deeper hardware issues.",
            steps: [
              "If there’s still no display, test with another PSU.",
              "Consider testing motherboard, CPU, or RAM in another system (if possible).",
              "If all else fails, take it to a technician for full hardware diagnostics.",
              
            ],
            takeaways: "If minimal boot and display checks fail, it's likely a hardware-level failure — motherboard, CPU, or PSU are often suspects.",
          },
          
        ],
      },
      {
        problem: "No Internet Connection",
        image: "/noInternetConnection.png",
        problemDescription: "problem description",
        stepsInfo: [
          {
            stepNumber: "1",
            stepTitle: "",
            why: "",
            steps: [
              "Open Command Prompt as Administrator",
              `Run these commands one at a time in Command Prompt (Admin): ipconfig /flushdns , netsh int ip reset, netsh winsock reset.`,
            
              "",
              "",
            ],
            takeaways: "",
          },
          {
            stepNumber: "2",
            stepTitle: "",
            why: "",
            steps: [
              "",
              "",
              "",
              ""
            ],
            takeaways: "",
          },
          {
            stepNumber: "3",
            stepTitle: "",
            why: "",
            steps: [
              "",
              "",
              "",
              ""
            ],
            takeaways: "",
          },
          {
            stepNumber: "4",
            stepTitle: "",
            why: "",
            steps: [
              "",
              "",
              "",
              ""
            ],
            takeaways: "",
          },
          {
            stepNumber: "5",
            stepTitle: "",
            why: "",
            steps: [
              "",
              "",
              "",
              ""
            ],
            takeaways: "",
          },
          {
            stepNumber: "6",
            stepTitle: "",
            why: "",
            steps: [
              "",
              "",
              "",
              ""
            ],
            takeaways: "",
          },
        ]
      },
      {
        problem: "Blue Screen of Death",
        image: "/BSOD.png",
        problemDescription: "problem description",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "test title",
          why: "why test",
          steps: ["steps test"],
          takeaways: "takeaway test",
        },
      },
    ],
  },
  {
    pcType: "Laptop",
    problems: [
      {
        problem: "Blue Screen of Death",
        image: "/BSOD.png",
        problemDescription: "problem description",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "test title",
          why: "why test",
          steps: ["steps test"],
          takeaways: "takeaway test",
        },
      },
      {
        problem: "Blue Screen of Death",
        image: "/BSOD.png",
        problemDescription: "problem description",
        stepsInfo: {
          stepNumber: "1",
          stepTitle: "test title",
          why: "why test",
          steps: ["steps test"],
          takeaways: "takeaway test",
        },
      },
    ],
  },
];
