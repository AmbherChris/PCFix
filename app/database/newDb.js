export const database = [
  {
    pcType: "Desktop",

    problems: [
      {
        issue: "Hardware Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Computer won’t turn on",
            image: "/desktop.png",
            problemDescription:
              "Your desktop computer doesn't power on at all — no lights, no fans, and no display output.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check the Power Supply",
                why: "The computer needs a working power source to turn on.",
                steps: [
                  "Ensure the power cable is firmly plugged into both the PC and the wall outlet.",
                  "Try plugging the PC into a different outlet that you know works.",
                  "If you're using a power strip or surge protector, make sure it's turned on.",
                  "Look for any signs of power (like lights or fan movement) when pressing the power button.",
                ],
                takeaways:
                  "Most power issues stem from loose cables or faulty outlets. Always start with power basics before diving deeper.",
              },
              {
                stepNumber: "2",
                stepTitle: "Inspect the Power Supply Unit (PSU)",
                why: "A faulty PSU can prevent any power from reaching the motherboard or components.",
                steps: [
                  "Check if the PSU switch (usually on the back) is turned on (| symbol).",
                  "Look for any burning smell or abnormal sounds from the PSU.",
                  "Test the PSU with a known working one if available, or use a PSU tester.",
                  "If the PSU fan isn’t spinning when the PC is powered on, it might be dead.",
                ],
                takeaways:
                  "The PSU is critical for power delivery. If it's dead, the computer will show no signs of life.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check the Motherboard and Internal Connections",
                why: "Loose or damaged internal components can prevent the PC from booting.",
                steps: [
                  "Unplug the PC and open the case carefully.",
                  "Check that the 24-pin motherboard and 8-pin CPU power connectors are secure.",
                  "Ensure RAM sticks and GPU are seated properly in their slots.",
                  "Look for any visible damage, such as burnt areas or bulging capacitors.",
                ],
                takeaways:
                  "Even a slightly loose cable or RAM stick can prevent a system from powering on.",
              },
              {
                stepNumber: "4",
                stepTitle: "Try a Minimal Boot",
                why: "This helps isolate whether a specific component is causing the failure.",
                steps: [
                  "Remove all non-essential hardware: extra RAM sticks, GPU, HDDs, etc.",
                  "Leave only the motherboard, CPU, one RAM stick, and PSU connected.",
                  "Try turning on the system and see if it shows any signs of life (like beeping or lights).",
                  "Swap out components (RAM, PSU, etc.) one by one to identify the faulty part.",
                ],
                takeaways:
                  "A minimal setup helps you troubleshoot by process of elimination. If it turns on, add components back one at a time.",
              },
            ],
          },
          {
            problem: "No display on monitor",
            image: "/desktop.png", // Adjust the image path as needed
            problemDescription:
              "The computer appears to power on (lights, fans, etc.), but nothing is shown on the monitor.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Verify Monitor and Cable Connections",
                why: "Loose or disconnected cables are often the cause of no display.",
                steps: [
                  "Ensure the monitor is plugged in and turned on.",
                  "Check that the video cable (HDMI, VGA, DisplayPort) is securely connected to both the monitor and the PC.",
                  "Try a different cable or port if possible.",
                  "Make sure the monitor is set to the correct input source (HDMI 1, DisplayPort, etc.).",
                ],
                takeaways:
                  "Always start by ruling out simple connection errors before assuming hardware failure.",
              },
              {
                stepNumber: "2",
                stepTitle: "Test with a Different Monitor or PC",
                why: "This helps isolate whether the issue is with the PC or the monitor.",
                steps: [
                  "Connect your PC to a different monitor to see if display appears.",
                  "Alternatively, connect your current monitor to another working PC or laptop.",
                  "If the other monitor works, the issue is likely with your original display.",
                  "If no monitor works with your PC, continue troubleshooting the computer.",
                ],
                takeaways:
                  "Swapping devices helps pinpoint which part of the setup is failing.",
              },
              {
                stepNumber: "3",
                stepTitle: "Inspect the Graphics Card (GPU)",
                why: "A poorly seated or malfunctioning GPU can prevent video output.",
                steps: [
                  "Turn off the PC, unplug it, and open the case.",
                  "Make sure the GPU is securely seated in its PCIe slot.",
                  "If the motherboard has integrated graphics, try removing the GPU and using the motherboard video output.",
                  "Check for GPU fan movement and any visible damage.",
                ],
                takeaways:
                  "A dead or unseated GPU often causes display issues, especially on gaming PCs.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for POST (Power-On Self-Test) Beeps or Codes",
                why: "Beep codes or LED indicators can help diagnose display-related problems.",
                steps: [
                  "Listen for any beeps during boot (if your motherboard has a speaker).",
                  "Refer to your motherboard manual for what the beep patterns or diagnostic LEDs mean.",
                  "A series of beeps may indicate RAM or GPU issues.",
                  "If there are no beeps or lights, consider testing RAM or CPU next.",
                ],
                takeaways:
                  "POST feedback is a valuable tool for diagnosing hardware-level boot/display issues.",
              },
            ],
          },

          {
            problem: "Random shutdowns or restarts",
            image: "/desktop.png", // Adjust the path to match your image
            problemDescription:
              "The computer randomly shuts down or restarts without warning. This can happen during use or even when idle.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check for Overheating",
                why: "Overheating causes the system to shut down to prevent hardware damage.",
                steps: [
                  "Download a hardware monitoring tool like HWMonitor or Core Temp.",
                  "Observe CPU and GPU temperatures — anything over 85–90°C under load can cause shutdowns.",
                  "Ensure all fans are spinning and not clogged with dust.",
                  "Clean your PC case and components using compressed air and ensure good airflow.",
                ],
                takeaways:
                  "Heat is a silent killer. Keeping your system cool helps maintain stability and longevity.",
              },
              {
                stepNumber: "2",
                stepTitle: "Inspect the Power Supply Unit (PSU)",
                why: "A failing or underpowered PSU can cause sudden shutdowns or reboots.",
                steps: [
                  "Make sure your PSU meets the wattage requirements of your hardware.",
                  "Check if the PSU fan is running when the PC is on.",
                  "If available, test with a different (higher wattage or known working) PSU.",
                  "Listen for any odd buzzing or burning smells from the PSU.",
                ],
                takeaways:
                  "An unstable power source often leads to random shutdowns — especially during load spikes.",
              },
              {
                stepNumber: "3",
                stepTitle: "Scan for Malware or Corrupt System Files",
                why: "Malware or corrupted system files can trigger restarts or force shutdowns.",
                steps: [
                  "Run a full system scan using Windows Defender or trusted antivirus software.",
                  "Use the command `sfc /scannow` in Command Prompt to fix corrupt system files.",
                  "Check Task Scheduler and background apps for suspicious shutdown triggers.",
                  "Use 'Event Viewer' to check for critical shutdown logs under 'System'.",
                ],
                takeaways:
                  "System corruption or malware can mimic hardware issues. Always rule these out before replacing parts.",
              },
              {
                stepNumber: "4",
                stepTitle: "Test RAM and Hardware Stability",
                why: "Bad RAM or unstable hardware can lead to system crashes.",
                steps: [
                  "Use MemTest86 or Windows Memory Diagnostic to test RAM.",
                  "If you have multiple RAM sticks, test them one at a time.",
                  "Ensure your RAM is seated properly and compatible with your motherboard.",
                  "Update BIOS/UEFI and chipset drivers if needed.",
                ],
                takeaways:
                  "Faulty or mismatched RAM is a common but overlooked source of instability and reboots.",
              },
            ],
          },

          {
            problem: "Noisy fans or hard drives",
            image: "/desktop.png", // Update this path based on your assets
            problemDescription:
              "Your desktop is making unusual noises—loud fan spinning, grinding from the hard drive, or rattling sounds. These could indicate cooling issues or failing storage.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Identify the Source of the Noise",
                why: "Knowing which component is causing the noise helps narrow down the fix.",
                steps: [
                  "Power on the computer and listen closely to pinpoint whether the sound is coming from a fan, hard drive, or other part.",
                  "Temporarily stop individual fans (like case or CPU fans) with a non-conductive object to isolate the noisy one (don’t use your fingers).",
                  "If it's a hard drive making clicking or grinding sounds, back up data immediately.",
                  "Remove the side panel for better access to localize the noise.",
                ],
                takeaways:
                  "Accurate identification avoids replacing the wrong component and saves time in repairs.",
              },
              {
                stepNumber: "2",
                stepTitle: "Clean Fans and Vents",
                why: "Dust buildup can cause fans to spin unevenly or louder than normal.",
                steps: [
                  "Turn off and unplug the PC before cleaning.",
                  "Use compressed air to blow dust out of fans, heatsinks, and case vents.",
                  "Clean fan blades gently with a soft brush or microfiber cloth.",
                  "Ensure all fans spin freely and aren’t obstructed.",
                ],
                takeaways:
                  "A simple cleaning can dramatically reduce fan noise and improve cooling efficiency.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check Fan Settings and Replace Faulty Units",
                why: "Incorrect fan control or failing fans can result in excessive noise.",
                steps: [
                  "Enter BIOS or use fan control software to check and adjust fan speeds.",
                  "Look for fans running at 100% constantly, which may indicate poor airflow or failing sensors.",
                  "Replace noisy or worn-out fans with new, quieter models.",
                  "Ensure all fans are properly secured to reduce vibrations.",
                ],
                takeaways:
                  "Modern fans are usually quiet—persistent noise often means it's time for a replacement or airflow fix.",
              },
              {
                stepNumber: "4",
                stepTitle: "Diagnose Hard Drive Noise",
                why: "Unusual clicking, grinding, or buzzing from an HDD may signal failure.",
                steps: [
                  "Back up any important data immediately if you hear clicking or grinding.",
                  "Use software tools like CrystalDiskInfo to check the drive’s health (SMART status).",
                  "Run chkdsk or other diagnostic tools to identify bad sectors or read errors.",
                  "Replace the hard drive if signs of failure appear or if noise worsens.",
                ],
                takeaways:
                  "Loud HDDs are a red flag. Data loss can be prevented by acting quickly and backing up early.",
              },
            ],
          },
          {
            problem: "USB ports not working",
            image: "/desktop.png", // Update this based on your actual image path
            problemDescription:
              "One or more USB ports on your desktop are not responding — devices like keyboard, mouse, or flash drives are not detected when plugged in.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Test with Multiple USB Devices",
                why: "Determining whether the issue is with the port or the device is the first step.",
                steps: [
                  "Try plugging different USB devices (mouse, flash drive, etc.) into the same port.",
                  "If none of them work, the issue is likely with the port.",
                  "Test the devices on a different computer to ensure they’re functional.",
                  "Also try other USB ports on the same machine to see if only one or all are affected.",
                ],
                takeaways:
                  "Narrowing it down saves time — it might not be the computer at all.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check for Physical Damage or Dirt",
                why: "Bent connectors or debris inside the port can prevent proper connection.",
                steps: [
                  "Inspect the USB port with a flashlight for dust, dirt, or bent pins.",
                  "Blow out dust using compressed air (gently).",
                  "Do not insert metal objects into the port to clean it.",
                  "If pins are visibly damaged, the port may need replacement.",
                ],
                takeaways:
                  "Sometimes, it’s just a dirty or physically damaged port causing connection failures.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update or Reinstall USB Drivers",
                why: "Corrupted or outdated drivers can prevent USB ports from working properly.",
                steps: [
                  "Open Device Manager (press `Windows + X` > Device Manager).",
                  "Expand 'Universal Serial Bus controllers'.",
                  "Right-click each USB Root Hub or Controller and choose 'Update driver'.",
                  "If problems persist, uninstall the USB controllers and restart your PC — they will reinstall automatically.",
                ],
                takeaways:
                  "Driver issues are one of the most common causes of USB port failure on working hardware.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check Power Management Settings",
                why: "Windows can disable USB ports to save power.",
                steps: [
                  "Go to Device Manager > USB Root Hub (right-click > Properties).",
                  "Under the 'Power Management' tab, uncheck 'Allow the computer to turn off this device to save power'.",
                  "Repeat for all USB Root Hubs listed.",
                  "Restart the computer and test the USB ports again.",
                ],
                takeaways:
                  "Power saving settings often disable ports unnecessarily, especially on desktops.",
              },
              {
                stepNumber: "5",
                stepTitle: "Inspect Motherboard USB Header (Optional)",
                why: "If front-panel USB ports don't work, the internal connection may be loose.",
                steps: [
                  "Shut down and unplug the PC.",
                  "Open the case and locate the USB cable coming from the front panel.",
                  "Ensure it's securely connected to the correct USB header on the motherboard.",
                  "Consult your motherboard manual if you're unsure of the correct location.",
                ],
                takeaways:
                  "Internal cables coming loose is more common than you think — a quick fix can restore port function.",
              },
            ],
          },
          {
            problem: "Peripherals (mouse, keyboard, printer) not detected",
            image: "/desktop.png", // Adjust to your actual path
            problemDescription:
              "Devices like your mouse, keyboard, or printer are not recognized by the computer, even though they are properly connected.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Try Different USB Ports",
                why: "The issue might be with the USB port, not the peripheral.",
                steps: [
                  "Unplug the device and try a different USB port (preferably on the back of the PC).",
                  "Avoid USB hubs and connect the peripheral directly to the PC.",
                  "Check if the device powers on (e.g., lights on keyboard or mouse).",
                  "If one port works and another doesn’t, it may be a port-specific issue.",
                ],
                takeaways:
                  "Switching ports helps determine if the issue is with the device or a specific USB port.",
              },
              {
                stepNumber: "2",
                stepTitle: "Test the Peripheral on Another Computer",
                why: "To rule out the possibility that the device itself is faulty.",
                steps: [
                  "Plug the same mouse, keyboard, or printer into another working PC or laptop.",
                  "If it’s not recognized there either, the device may be broken.",
                  "If it works fine on another PC, the problem likely lies with your system.",
                ],
                takeaways:
                  "Confirming the device works elsewhere avoids unnecessary troubleshooting.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check for Driver Issues",
                why: "Missing or corrupt drivers can prevent device detection.",
                steps: [
                  "Go to Device Manager (Windows + X > Device Manager).",
                  "Look under categories like 'Mice and other pointing devices' or 'Keyboards'.",
                  "Check for any yellow warning icons or 'Unknown Device'.",
                  "Right-click the device and select 'Update driver' or 'Uninstall' then reboot.",
                ],
                takeaways:
                  "Most peripherals use plug-and-play drivers — but they can still fail or become outdated.",
              },
              {
                stepNumber: "4",
                stepTitle: "Ensure Required Services and Settings Are Enabled",
                why: "Some services or BIOS settings can affect peripheral detection.",
                steps: [
                  "Restart your PC and try accessing BIOS/UEFI — if the keyboard doesn’t work there, it's likely a hardware issue.",
                  "In BIOS, check that USB Legacy Support or USB Ports are enabled.",
                  "For printers, ensure that the print spooler service is running (Run > `services.msc` > Print Spooler).",
                  "Try running the Windows troubleshooter: Settings > Devices > Troubleshoot.",
                ],
                takeaways:
                  "System-level settings can block communication between your PC and peripherals.",
              },
              {
                stepNumber: "5",
                stepTitle:
                  "Replace Cables or Use Original Accessories (Printers)",
                why: "Damaged or incompatible cables/adapters can prevent detection.",
                steps: [
                  "Try swapping USB or power cables with known working ones.",
                  "Use the original cable provided with the printer or device.",
                  "Avoid using USB hubs for printers — plug them directly into the PC.",
                  "If the device has a power adapter, ensure it's supplying enough power.",
                ],
                takeaways:
                  "Low power or bad connections are a frequent cause of unresponsive peripherals, especially printers.",
              },
            ],
          },
          {
            problem: "Hard drive failure",
            image: "/desktop.png", // Update with your actual image path
            problemDescription:
              "Your computer is freezing, crashing, or unable to boot — and you hear clicking, grinding, or see disk errors. These are signs your hard drive may be failing.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Look for Warning Signs",
                why: "Early symptoms can help you act before data loss occurs.",
                steps: [
                  "Watch for slow file access, disappearing files, or frequent freezing.",
                  "Listen for clicking or grinding noises coming from the drive.",
                  "If Windows shows SMART errors on boot, take it seriously.",
                  "Frequent blue screens or 'disk read' errors are major red flags.",
                ],
                takeaways:
                  "Recognizing the signs early can save your data and help prevent system failure.",
              },
              {
                stepNumber: "2",
                stepTitle: "Back Up Your Data Immediately",
                why: "If the drive is failing, backing up is the first and most urgent action.",
                steps: [
                  "Copy critical files to an external drive, USB, or cloud service.",
                  "Avoid running heavy programs during backup to reduce disk stress.",
                  "Use file syncing tools like OneDrive, Google Drive, or backup software.",
                  "If the drive is unresponsive, try accessing it from another PC using a USB-to-SATA adapter.",
                ],
                takeaways:
                  "Once a drive starts failing, it may become unreadable at any moment — act fast.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check the Drive’s Health with Diagnostic Tools",
                why: "Tools can confirm whether the drive is healthy or near failure.",
                steps: [
                  "Install CrystalDiskInfo or HDDScan to check the drive's SMART data.",
                  "Look for 'Reallocated Sectors', 'Pending Sectors', or 'Read Errors'.",
                  "A 'Caution' or 'Bad' status indicates the drive is deteriorating.",
                  "Run chkdsk (`chkdsk C: /f /r`) from Command Prompt if the OS is still responsive.",
                ],
                takeaways:
                  "SMART values provide insight into your drive’s health before it fails completely.",
              },
              {
                stepNumber: "4",
                stepTitle: "Replace the Drive",
                why: "A failing hard drive cannot be repaired — it must be replaced.",
                steps: [
                  "Purchase a compatible HDD or SSD replacement.",
                  "Use cloning tools like Macrium Reflect or Clonezilla to transfer data (if the old drive still works).",
                  "Clean install the OS if cloning isn't possible.",
                  "Dispose of the old drive securely — consider wiping it or physically destroying it.",
                ],
                takeaways:
                  "SSDs are more reliable than HDDs — consider upgrading during replacement.",
              },
              {
                stepNumber: "5",
                stepTitle: "Restore Your Data and Monitor the New Drive",
                why: "Ensuring the new drive is working properly avoids repeat issues.",
                steps: [
                  "After installing the new drive, restore your files and software.",
                  "Run a full disk check and ensure proper boot configuration.",
                  "Install a SMART monitor to keep an eye on future health.",
                  "Keep a regular backup schedule going forward to avoid data loss.",
                ],
                takeaways:
                  "Backup + monitoring = long-term protection from future hard drive failures.",
              },
            ],
          },
          {
  problem: "RAM issues (frequent beeping, boot loops)",
  image: "/desktop.png", // Update to your image path
  problemDescription:
    "Your PC may be stuck in a boot loop, freeze randomly, or emit a series of beeps when powered on. These symptoms often point to faulty or improperly installed RAM.",
  stepsInfo: [
    {
      stepNumber: "1",
      stepTitle: "Listen to the Beep Codes",
      why: "Beep codes help identify RAM or other hardware issues before the system even loads.",
      steps: [
        "Power on the PC and count the number and pattern of beeps.",
        "Refer to your motherboard manual or manufacturer’s site to interpret the beep code.",
        "Frequent short beeps or a repeating pattern typically indicate memory errors.",
        "If there are no beeps, the motherboard may not have a speaker or is not POSTing at all."
      ],
      takeaways: "Beep codes are a diagnostic tool provided by your BIOS and can guide your next steps."
    },
    {
      stepNumber: "2",
      stepTitle: "Reseat the RAM Sticks",
      why: "Loose or poorly seated RAM is one of the most common causes of boot loops.",
      steps: [
        "Turn off the PC and unplug the power cable.",
        "Open the case and locate the RAM sticks on the motherboard.",
        "Remove them carefully, then reinsert them firmly into the same or different slots.",
        "Ensure the locking clips snap into place on both sides of each stick."
      ],
      takeaways: "Reseating RAM often resolves POST and boot-loop issues with no extra tools or cost."
    },
    {
      stepNumber: "3",
      stepTitle: "Test RAM One Stick at a Time",
      why: "Testing each stick individually helps isolate a faulty module.",
      steps: [
        "If you have multiple RAM sticks, remove all but one.",
        "Try booting with each stick in a known working slot one at a time.",
        "If one module fails to boot but others succeed, that stick may be faulty.",
        "Try different slots to rule out a bad motherboard DIMM slot."
      ],
      takeaways: "This method narrows the problem to either a specific RAM stick or slot."
    },
    {
      stepNumber: "4",
      stepTitle: "Run Memory Diagnostic Tools",
      why: "Software-based memory tests can catch errors not visible during normal use.",
      steps: [
        "Use Windows Memory Diagnostic (search 'Windows Memory Diagnostic' in the Start Menu).",
        "Alternatively, use MemTest86 by creating a bootable USB stick.",
        "Run a full memory test — it may take hours depending on RAM size.",
        "Note any errors or failures reported during the test."
      ],
      takeaways: "Memory testing software gives a clear indication of defective RAM."
    },
    {
      stepNumber: "5",
      stepTitle: "Replace the Faulty RAM",
      why: "RAM cannot be repaired — it must be replaced if it's faulty.",
      steps: [
        "Buy RAM that's compatible with your motherboard (check DDR version, speed, and voltage).",
        "Use matching RAM sticks for dual-channel configurations, if possible.",
        "Install new RAM firmly into the DIMM slots and test again.",
        "Update your BIOS if the new RAM isn’t recognized properly."
      ],
      takeaways: "RAM replacement is relatively cheap and can dramatically improve system stability."
    }
  ]
}
,
          {
  problem: "Power supply failure",
  image: "/desktop.png", // Replace with your image path
  problemDescription:
    "The power supply unit (PSU) provides power to all components. Failure can cause the computer not to start, random shutdowns, or no power at all.",
  stepsInfo: [
    {
      stepNumber: "1",
      stepTitle: "Check the Power Cable and Outlet",
      why: "Sometimes the issue is as simple as a disconnected or faulty power source.",
      steps: [
        "Ensure the power cable is firmly connected to the PSU and wall outlet.",
        "Test the outlet with another device to confirm it’s supplying power.",
        "Try using a different power cable if available."
      ],
      takeaways: "Rule out external power issues before opening your PC."
    },
    {
      stepNumber: "2",
      stepTitle: "Inspect the PSU for Physical Damage",
      why: "Visible damage or burning smell indicates PSU failure.",
      steps: [
        "Turn off and unplug your PC.",
        "Open the case and visually inspect the PSU for bulging capacitors, scorch marks, or burnt smell.",
        "Check if the PSU fan spins freely without obstruction."
      ],
      takeaways: "Physical damage is a clear sign the PSU needs replacement."
    },
    {
      stepNumber: "3",
      stepTitle: "Test the PSU with a Paperclip Test",
      why: "A quick test to check if the PSU turns on.",
      steps: [
        "Unplug the PSU from all components.",
        "Locate the 24-pin motherboard connector.",
        "Use a paperclip to short the green wire (PS_ON) to any black ground wire.",
        "Plug in the PSU and turn it on; the fan should spin if the PSU works."
      ],
      takeaways: "If the fan doesn’t spin, the PSU is likely faulty."
    },
    {
      stepNumber: "4",
      stepTitle: "Use a PSU Tester or Multimeter",
      why: "More accurate testing tools can confirm voltage output.",
      steps: [
        "Purchase or borrow a PSU tester to connect to the PSU connectors.",
        "Check if all voltage rails (+12V, +5V, +3.3V) are within acceptable ranges.",
        "Alternatively, use a multimeter to manually test voltages."
      ],
      takeaways: "Incorrect voltages indicate PSU failure."
    },
    {
      stepNumber: "5",
      stepTitle: "Replace the Power Supply Unit",
      why: "A faulty PSU must be replaced to prevent damage to other components.",
      steps: [
        "Choose a PSU with appropriate wattage and connectors for your PC.",
        "Turn off the PC and unplug it.",
        "Remove the old PSU carefully, noting cable connections.",
        "Install the new PSU and reconnect all cables securely.",
        "Power on the PC to confirm the issue is resolved."
      ],
      takeaways: "Replacing the PSU should restore power and stability to your system."
    }
  ]
}
,
        ],
      },

      {
        issue: "Storage and Disk Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Slow read/write speeds",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Disk not detected",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Corrupted files or partitions",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Insufficient disk space",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Clicking or grinding sounds from hard drive",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "Operating System & Software Problems",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Blue Screen of Death (BSOD)",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Operating system not booting",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "System freezes or lags",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Driver conflicts or failures",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Frequent error messages or crashes",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Software not installing or updating",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Compatibility issues with older/newer software",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "Network & Internet Problems",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "No internet connection",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Slow internet speed",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Network adapter not recognized",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Wi-Fi drops frequently",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "IP address conflict",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "Malware & Security Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Virus infections",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Spyware or ransomware",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Unauthorized access attempts",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Pop-ups and ads appearing randomly",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Antivirus disabled or not working",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "User Interface Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Frozen screen",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Unresponsive applications",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Cursor lag or delay",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Screen resolution or display settings wrong",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Keyboard or mouse input lag",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "BIOS/UEFI & Boot Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Boot device not found",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Stuck in BIOS",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Incorrect BIOS settings",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "CMOS battery failure",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
      {
        issue: "Software & Application Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Apps crashing or not opening",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Corrupted installations",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Update failures",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
          {
            problem: "Incompatibility with OS updates",
            image: "/desktop.png",
            problemDescription: "",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "",
                why: "",
                steps: ["", "", "", ""],
                takeaways: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
