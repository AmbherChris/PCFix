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
                  "If there are no beeps, the motherboard may not have a speaker or is not POSTing at all.",
                ],
                takeaways:
                  "Beep codes are a diagnostic tool provided by your BIOS and can guide your next steps.",
              },
              {
                stepNumber: "2",
                stepTitle: "Reseat the RAM Sticks",
                why: "Loose or poorly seated RAM is one of the most common causes of boot loops.",
                steps: [
                  "Turn off the PC and unplug the power cable.",
                  "Open the case and locate the RAM sticks on the motherboard.",
                  "Remove them carefully, then reinsert them firmly into the same or different slots.",
                  "Ensure the locking clips snap into place on both sides of each stick.",
                ],
                takeaways:
                  "Reseating RAM often resolves POST and boot-loop issues with no extra tools or cost.",
              },
              {
                stepNumber: "3",
                stepTitle: "Test RAM One Stick at a Time",
                why: "Testing each stick individually helps isolate a faulty module.",
                steps: [
                  "If you have multiple RAM sticks, remove all but one.",
                  "Try booting with each stick in a known working slot one at a time.",
                  "If one module fails to boot but others succeed, that stick may be faulty.",
                  "Try different slots to rule out a bad motherboard DIMM slot.",
                ],
                takeaways:
                  "This method narrows the problem to either a specific RAM stick or slot.",
              },
              {
                stepNumber: "4",
                stepTitle: "Run Memory Diagnostic Tools",
                why: "Software-based memory tests can catch errors not visible during normal use.",
                steps: [
                  "Use Windows Memory Diagnostic (search 'Windows Memory Diagnostic' in the Start Menu).",
                  "Alternatively, use MemTest86 by creating a bootable USB stick.",
                  "Run a full memory test — it may take hours depending on RAM size.",
                  "Note any errors or failures reported during the test.",
                ],
                takeaways:
                  "Memory testing software gives a clear indication of defective RAM.",
              },
              {
                stepNumber: "5",
                stepTitle: "Replace the Faulty RAM",
                why: "RAM cannot be repaired — it must be replaced if it's faulty.",
                steps: [
                  "Buy RAM that's compatible with your motherboard (check DDR version, speed, and voltage).",
                  "Use matching RAM sticks for dual-channel configurations, if possible.",
                  "Install new RAM firmly into the DIMM slots and test again.",
                  "Update your BIOS if the new RAM isn’t recognized properly.",
                ],
                takeaways:
                  "RAM replacement is relatively cheap and can dramatically improve system stability.",
              },
            ],
          },
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
                  "Try using a different power cable if available.",
                ],
                takeaways:
                  "Rule out external power issues before opening your PC.",
              },
              {
                stepNumber: "2",
                stepTitle: "Inspect the PSU for Physical Damage",
                why: "Visible damage or burning smell indicates PSU failure.",
                steps: [
                  "Turn off and unplug your PC.",
                  "Open the case and visually inspect the PSU for bulging capacitors, scorch marks, or burnt smell.",
                  "Check if the PSU fan spins freely without obstruction.",
                ],
                takeaways:
                  "Physical damage is a clear sign the PSU needs replacement.",
              },
              {
                stepNumber: "3",
                stepTitle: "Test the PSU with a Paperclip Test",
                why: "A quick test to check if the PSU turns on.",
                steps: [
                  "Unplug the PSU from all components.",
                  "Locate the 24-pin motherboard connector.",
                  "Use a paperclip to short the green wire (PS_ON) to any black ground wire.",
                  "Plug in the PSU and turn it on; the fan should spin if the PSU works.",
                ],
                takeaways: "If the fan doesn’t spin, the PSU is likely faulty.",
              },
              {
                stepNumber: "4",
                stepTitle: "Use a PSU Tester or Multimeter",
                why: "More accurate testing tools can confirm voltage output.",
                steps: [
                  "Purchase or borrow a PSU tester to connect to the PSU connectors.",
                  "Check if all voltage rails (+12V, +5V, +3.3V) are within acceptable ranges.",
                  "Alternatively, use a multimeter to manually test voltages.",
                ],
                takeaways: "Incorrect voltages indicate PSU failure.",
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
                  "Power on the PC to confirm the issue is resolved.",
                ],
                takeaways:
                  "Replacing the PSU should restore power and stability to your system.",
              },
            ],
          },
        ],
      },

      {
        issue: "Storage and Disk Issues",
        issueImage: "/",
        typeOfProblems: [
          {
            problem: "Slow read/write speeds",
            image: "/desktop.png", // Update this to your actual image path
            problemDescription:
              "File transfers take unusually long, programs load slowly, or your system lags when accessing storage. These are signs of degraded read/write performance.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Drive Health",
                why: "An aging or failing hard drive or SSD can slow down significantly.",
                steps: [
                  "Use a tool like CrystalDiskInfo or HDDScan to check the drive's SMART status.",
                  "Look for signs like high 'Reallocated Sectors Count' or 'Pending Sectors'.",
                  "A ‘Caution’ or ‘Bad’ status indicates the drive is likely degraded.",
                  "Replace the drive if it's failing.",
                ],
                takeaways:
                  "Failing drives lose speed and reliability — early detection prevents data loss.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check Available Storage Space",
                why: "Drives with little free space operate slower, especially SSDs.",
                steps: [
                  "Go to File Explorer > This PC and check each drive’s free space.",
                  "Free up space by deleting temporary files and unused programs.",
                  "Run Disk Cleanup: Search 'Disk Cleanup' from the Start menu.",
                  "For SSDs, ensure at least 10–20% of space remains free.",
                ],
                takeaways:
                  "Low free space affects performance, especially on SSDs due to wear-leveling needs.",
              },
              {
                stepNumber: "3",
                stepTitle: "Defragment or TRIM the Drive",
                why: "Fragmentation on HDDs or outdated TRIM commands on SSDs can reduce speed.",
                steps: [
                  "For HDDs: Open 'Defragment and Optimize Drives' and optimize the hard drive.",
                  "For SSDs: Ensure TRIM is enabled (`fsutil behavior query DisableDeleteNotify` in CMD).",
                  "Run 'Optimize' from the same defragment window for SSDs — it sends TRIM commands.",
                ],
                takeaways:
                  "Modern OSes handle this automatically, but manual checks can still help.",
              },
              {
                stepNumber: "4",
                stepTitle: "Scan for Malware",
                why: "Malware or background processes can hog storage I/O.",
                steps: [
                  "Run a full system scan using Windows Defender or a trusted antivirus.",
                  "Use Task Manager (Ctrl + Shift + Esc) and check the 'Disk' column.",
                  "End high disk-usage processes if they're unneeded or suspicious.",
                  "Consider using Malwarebytes to scan for more advanced threats.",
                ],
                takeaways:
                  "Malware often causes unexplained slowdowns and heavy disk activity.",
              },
              {
                stepNumber: "5",
                stepTitle: "Switch to SSD or Upgrade Drive",
                why: "Older HDDs are inherently slow compared to SSDs.",
                steps: [
                  "If you’re using an HDD, consider upgrading to a solid-state drive (SSD).",
                  "Clone your existing system using tools like Macrium Reflect or do a fresh install.",
                  "Make sure your SATA/PCIe interface supports the new drive type.",
                  "For SSDs, consider NVMe for significantly faster performance if your motherboard supports it.",
                ],
                takeaways:
                  "Upgrading to an SSD is the most impactful speed improvement for storage performance.",
              },
            ],
          },
          {
            problem: "Disk not detected",
            image: "/desktop.png", // Update to your actual image path
            problemDescription:
              "Your computer fails to recognize the hard drive or SSD. This can occur at boot or within the operating system and usually indicates a hardware or configuration issue.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Physical Connections",
                why: "Loose or disconnected cables are a common cause of disk detection failure.",
                steps: [
                  "Turn off the computer and unplug it from power.",
                  "Open the case and verify the SATA or NVMe connectors are securely attached to the drive and motherboard.",
                  "If you're using a desktop, try a different SATA port or cable.",
                  "Reconnect power cables from the PSU to the drive if applicable.",
                ],
                takeaways:
                  "Most detection issues are due to simple physical disconnections.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check BIOS/UEFI Settings",
                why: "The BIOS/UEFI must detect the drive before the OS can use it.",
                steps: [
                  "Restart the PC and enter BIOS/UEFI (usually by pressing Del, F2, or Esc).",
                  "Check if the disk is listed under 'Storage' or 'Boot Devices'.",
                  "Ensure the correct SATA or NVMe controller is enabled.",
                  "If not detected, reseat the drive and try again.",
                ],
                takeaways:
                  "If the BIOS doesn't detect the drive, the OS never will — fix starts here.",
              },
              {
                stepNumber: "3",
                stepTitle: "Initialize the Disk in Disk Management",
                why: "A new or corrupted disk may need to be initialized to show up in Windows.",
                steps: [
                  "Right-click the Start menu > Disk Management.",
                  "Look for any disks labeled 'Unknown' or 'Not Initialized'.",
                  "Right-click the disk and select 'Initialize Disk'.",
                  "Choose MBR or GPT based on your system (UEFI = GPT, Legacy = MBR).",
                ],
                takeaways:
                  "Uninitialized disks are invisible to File Explorer until properly set up.",
              },
              {
                stepNumber: "4",
                stepTitle: "Update or Reinstall Storage Drivers",
                why: "Missing or outdated drivers can prevent disk recognition.",
                steps: [
                  "Open Device Manager and expand 'Disk drives' and 'IDE/ATA Controllers'.",
                  "Right-click and update drivers for any storage-related hardware.",
                  "If necessary, uninstall and restart — Windows will reinstall default drivers.",
                  "For NVMe drives, check the motherboard manufacturer’s site for specific NVMe drivers.",
                ],
                takeaways:
                  "Driver conflicts or missing storage drivers can block detection entirely.",
              },
              {
                stepNumber: "5",
                stepTitle: "Test the Disk on Another System",
                why: "This helps determine if the problem is the disk or your computer.",
                steps: [
                  "Remove the disk and connect it to another PC using a SATA port or external enclosure.",
                  "If it works on another system, your motherboard or cables may be faulty.",
                  "If it doesn’t work elsewhere either, the disk is likely dead.",
                  "Consider using data recovery services if the data is critical.",
                ],
                takeaways:
                  "Testing on another system confirms whether the disk or your system is at fault.",
              },
            ],
          },
          {
            problem: "Corrupted files or partitions",
            image: "/desktop.png", // Update to your actual image path
            problemDescription:
              "Files may become inaccessible, programs crash on open, or partitions show as RAW or unallocated. This is often due to file system errors, power loss, or failing storage hardware.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Use CHKDSK to Scan the Drive",
                why: "CHKDSK (Check Disk) scans for file system errors and attempts to fix them.",
                steps: [
                  "Open Command Prompt as Administrator.",
                  "Type: `chkdsk C: /f /r` (replace C: with the correct drive letter).",
                  "Press Enter and confirm if asked to schedule on next restart.",
                  "Restart your PC to let CHKDSK scan and repair the disk.",
                ],
                takeaways:
                  "CHKDSK is a built-in tool to fix many common disk errors safely.",
              },
              {
                stepNumber: "2",
                stepTitle: "Recover Files Using File History or Backups",
                why: "Corrupted files may need to be restored from a backup if they can’t be repaired.",
                steps: [
                  "Open Settings > Update & Security > Backup > File History.",
                  "Restore the last known good version of the file if available.",
                  "Alternatively, use third-party backup software or cloud recovery.",
                  "If you don’t have a backup, skip to file recovery tools.",
                ],
                takeaways:
                  "Regular backups are the best defense against irreversible corruption.",
              },
              {
                stepNumber: "3",
                stepTitle: "Use Recovery Software for Lost Partitions or Files",
                why: "If a partition is lost or a file is too damaged, specialized tools may recover them.",
                steps: [
                  "Download and install recovery tools like Recuva, TestDisk, or EaseUS.",
                  "Run a deep scan on the affected drive or partition.",
                  "Recover important files to a separate healthy drive.",
                  "Avoid writing new data to the corrupted drive during recovery.",
                ],
                takeaways:
                  "Professional tools can often recover seemingly lost partitions or files.",
              },
              {
                stepNumber: "4",
                stepTitle: "Reformat the Partition (as a Last Resort)",
                why: "If a partition is too corrupted, reformatting clears errors but erases data.",
                steps: [
                  "Open Disk Management (right-click Start > Disk Management).",
                  "Locate the corrupted volume (may show as RAW or unallocated).",
                  "Right-click and choose 'Format' or 'New Simple Volume'.",
                  "Assign a drive letter and format as NTFS or exFAT.",
                ],
                takeaways:
                  "Reformatting solves the problem but only use it after exhausting recovery options.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check the Health of the Drive",
                why: "Corruption may be a symptom of failing hardware.",
                steps: [
                  "Use CrystalDiskInfo or similar SMART monitoring tools.",
                  "Check if the drive status is 'Caution' or 'Bad'.",
                  "Replace the drive if it's showing signs of physical failure.",
                  "Consider upgrading to an SSD if still on a traditional HDD.",
                ],
                takeaways:
                  "If the drive is failing, continuing to use it may cause further corruption or data loss.",
              },
            ],
          },
          {
            problem: "Insufficient disk space",
            image: "/desktop.png",
            problemDescription:
              "When your system drive (usually C:) runs low on space, it can slow down your PC, prevent updates, and cause app crashes. Freeing up disk space helps improve performance and system stability.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Delete Temporary and Unnecessary Files",
                why: "Temporary files and cache can consume significant space over time.",
                steps: [
                  "Open Settings > System > Storage.",
                  "Click 'Temporary files' and select items to delete (Downloads, Cache, etc.).",
                  "Click 'Remove files' to clean them up.",
                  "Alternatively, use Disk Cleanup: press Start and search 'Disk Cleanup'.",
                ],
                takeaways:
                  "Quickly free up several GB of space with a few clicks.",
              },
              {
                stepNumber: "2",
                stepTitle: "Uninstall Unused Applications",
                why: "Large applications or games can consume tens of gigabytes unnecessarily.",
                steps: [
                  "Go to Settings > Apps > Installed apps.",
                  "Sort by size to find space-consuming programs.",
                  "Uninstall apps or games you no longer use.",
                  "Consider moving large programs to another drive if possible.",
                ],
                takeaways:
                  "Removing unused software reclaims space and can speed up your system.",
              },
              {
                stepNumber: "3",
                stepTitle: "Clear System Restore and Shadow Copies",
                why: "System restore points can use many gigabytes of storage.",
                steps: [
                  "Open Control Panel > System > System Protection.",
                  "Select the system drive (C:) and click 'Configure'.",
                  "Click 'Delete' to remove all restore points.",
                  "Optionally, reduce the maximum space allowed for restore points.",
                ],
                takeaways:
                  "This action can free up significant space but removes backup snapshots.",
              },
              {
                stepNumber: "4",
                stepTitle: "Move Files to External or Cloud Storage",
                why: "Personal files like photos and videos take up large amounts of disk space.",
                steps: [
                  "Transfer files to an external drive or USB stick.",
                  "Upload photos, videos, or documents to cloud storage (Google Drive, OneDrive, etc.).",
                  "After confirming the transfer, delete local copies to free space.",
                  "Enable cloud sync features to keep files accessible without local storage use.",
                ],
                takeaways:
                  "Cloud or external storage is ideal for freeing space without losing access.",
              },
              {
                stepNumber: "5",
                stepTitle: "Extend or Upgrade Your Storage",
                why: "If you're constantly running low, your disk size may be insufficient for your usage.",
                steps: [
                  "Consider upgrading to a larger SSD or adding a second internal drive.",
                  "Use Disk Management to extend a partition if unallocated space is available.",
                  "Migrate your data to the new drive using cloning tools like Macrium Reflect.",
                  "Reinstall apps or games on the new or secondary storage.",
                ],
                takeaways:
                  "Sometimes, the only long-term fix is simply adding more storage capacity.",
              },
            ],
          },
          {
            problem: "Clicking or grinding sounds from hard drive",
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "Clicking or grinding noises often indicate physical failure of a traditional HDD (Hard Disk Drive). This is a serious issue that can lead to complete data loss if not handled properly.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Immediately Power Down the Computer",
                why: "Continuing to run a failing drive can cause more damage and make recovery harder.",
                steps: [
                  "Shut down the computer as soon as you hear abnormal drive sounds.",
                  "Unplug the power supply to ensure it's completely off.",
                  "Avoid rebooting or running software from the affected drive.",
                ],
                takeaways:
                  "The sooner you power down, the better your chances of data recovery.",
              },
              {
                stepNumber: "2",
                stepTitle: "Disconnect the Drive",
                why: "Physically isolating the drive prevents any accidental write activity.",
                steps: [
                  "Open the computer case carefully.",
                  'Locate the noisy hard drive (typically 3.5" in desktops or 2.5" in laptops).',
                  "Disconnect both the power and SATA cables.",
                  "Label the drive if necessary and store it safely.",
                ],
                takeaways:
                  "Preventing further damage is key when a mechanical failure is suspected.",
              },
              {
                stepNumber: "3",
                stepTitle:
                  "Attempt Data Recovery Using a Secondary System (Optional)",
                why: "If the drive still spins up normally, you may recover some data using tools.",
                steps: [
                  "Connect the drive to another computer via SATA or a USB enclosure.",
                  "Use read-only recovery tools like Recuva, TestDisk, or EaseUS.",
                  "Copy important files to a separate healthy drive immediately.",
                  "Stop if you hear the sounds again – don’t force recovery.",
                ],
                takeaways:
                  "Use software recovery only if the drive appears stable and readable.",
              },
              {
                stepNumber: "4",
                stepTitle: "Consider Professional Data Recovery Services",
                why: "Clicking or grinding usually means internal mechanical failure — not fixable at home.",
                steps: [
                  "Look for a certified data recovery lab in your area.",
                  "Be prepared for potentially high costs depending on the drive condition.",
                  "Provide as much detail about the symptoms and the drive's history as possible.",
                  "Avoid DIY fixes like freezing or tapping the drive — they can cause permanent damage.",
                ],
                takeaways:
                  "Professionals can open the drive in clean rooms and recover data using specialized tools.",
              },
              {
                stepNumber: "5",
                stepTitle: "Replace the Drive with a New One",
                why: "A failing hard drive should never be trusted again, even if it temporarily works.",
                steps: [
                  "Buy a new hard drive or consider upgrading to an SSD for better performance.",
                  "Reinstall your operating system or restore from a backup image.",
                  "Restore personal files from backups or recovered data.",
                  "Ensure the new drive has adequate ventilation to prevent future failure.",
                ],
                takeaways:
                  "Use this as a reminder to regularly back up data to avoid loss in the future.",
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
            problemDescription:
              "A Blue Screen of Death (BSOD) occurs when Windows encounters a critical error it can't recover from. Causes range from driver issues and hardware failure to corrupt system files or memory problems.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Note the Stop Code or Error Message",
                why: "The stop code can help identify what caused the crash (e.g., MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL).",
                steps: [
                  "When the BSOD appears, write down or take a photo of the error message.",
                  "Pay attention to any specific file name (e.g., nvlddmkm.sys) or driver mentioned.",
                  "You can also find logs later in Event Viewer or using a tool like BlueScreenView.",
                ],
                takeaways:
                  "The stop code is a vital clue to pinpoint the root cause.",
              },
              {
                stepNumber: "2",
                stepTitle: "Boot into Safe Mode",
                why: "Safe Mode loads only essential drivers, helping you troubleshoot without crashes.",
                steps: [
                  "Restart the PC and press F8 or Shift + F8 (for older systems) or hold Shift while clicking Restart.",
                  "Select 'Troubleshoot' > 'Advanced options' > 'Startup Settings'.",
                  "Press F4 to boot into Safe Mode.",
                  "If Safe Mode works fine, the issue may be software or driver related.",
                ],
                takeaways:
                  "Safe Mode allows safe troubleshooting by isolating third-party software.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check for Driver Issues",
                why: "Outdated or corrupted drivers are one of the most common BSOD triggers.",
                steps: [
                  "Right-click Start > Device Manager.",
                  "Look for devices with a yellow triangle icon.",
                  "Right-click and update drivers, especially for graphics, chipset, and storage controllers.",
                  "Uninstall any recent drivers that were added before BSODs started.",
                ],
                takeaways:
                  "Keeping drivers updated prevents most software-level hardware conflicts.",
              },
              {
                stepNumber: "4",
                stepTitle: "Run System File Checker and DISM",
                why: "Corrupted system files can cause crashes and OS instability.",
                steps: [
                  "Open Command Prompt as Administrator.",
                  "Run: `sfc /scannow` and wait for it to complete.",
                  "Then run: `DISM /Online /Cleanup-Image /RestoreHealth`.",
                  "Reboot after both scans complete.",
                ],
                takeaways:
                  "System repair tools can resolve BSODs caused by internal OS damage.",
              },
              {
                stepNumber: "5",
                stepTitle: "Test Your RAM and Hard Drive",
                why: "Faulty memory or storage can trigger random crashes and blue screens.",
                steps: [
                  "Search 'Windows Memory Diagnostic' and run a full test.",
                  "Check your drive health using tools like CrystalDiskInfo or run `chkdsk /f` in Command Prompt.",
                  "Replace or remove any faulty RAM modules or drives as needed.",
                  "Re-seat RAM sticks to ensure they're properly connected.",
                ],
                takeaways:
                  "Hardware problems are a leading cause of persistent BSODs.",
              },
              {
                stepNumber: "6",
                stepTitle: "Perform a System Restore or Clean Boot",
                why: "If BSODs started recently, a restore point or clean boot can remove the trigger.",
                steps: [
                  "Open Control Panel > Recovery > Open System Restore.",
                  "Choose a restore point before the issue began.",
                  "Alternatively, disable all startup items via Task Manager > Startup tab.",
                  "Restart and re-enable apps one by one to isolate the problem.",
                ],
                takeaways:
                  "Rolling back recent changes can undo the cause of sudden instability.",
              },
            ],
          },
          {
            problem: "Operating system not booting",
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "The computer powers on but fails to load the operating system, stopping at a blank screen, error message, or boot loop. This can be caused by corrupted system files, disk errors, or boot configuration problems.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check for Error Messages on Screen",
                why: "Error messages or codes can provide clues on what is preventing boot.",
                steps: [
                  "Turn on the PC and carefully note any error message displayed.",
                  "Common errors include 'Operating System not found' or 'No boot device available'.",
                  "Write down any codes or messages for reference.",
                ],
                takeaways:
                  "Identifying error messages helps narrow down troubleshooting.",
              },
              {
                stepNumber: "2",
                stepTitle: "Verify Boot Order in BIOS/UEFI",
                why: "Incorrect boot device priority can prevent the OS from loading.",
                steps: [
                  "Restart and enter BIOS/UEFI settings (usually by pressing Del, F2, or F12 during startup).",
                  "Navigate to Boot or Boot Order section.",
                  "Ensure your primary hard drive or SSD with the OS is first in the boot priority list.",
                  "Save and exit BIOS.",
                ],
                takeaways:
                  "Proper boot device priority is essential for system startup.",
              },
              {
                stepNumber: "3",
                stepTitle: "Run Startup Repair",
                why: "Startup Repair can fix common boot issues automatically.",
                steps: [
                  "Boot from a Windows installation media (USB or DVD).",
                  "Choose 'Repair your computer' > 'Troubleshoot' > 'Startup Repair'.",
                  "Follow on-screen instructions and let the tool scan and fix problems.",
                  "Restart the PC once repair is complete.",
                ],
                takeaways:
                  "Automatic repair tools often resolve boot problems without manual intervention.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check and Repair Disk Errors",
                why: "Disk corruption or bad sectors can stop the OS from booting.",
                steps: [
                  "Access Command Prompt from recovery environment.",
                  "Run `chkdsk /f /r C:` (replace C: with your OS drive letter).",
                  "Allow the scan and repair to complete fully.",
                  "Restart the PC and test if it boots.",
                ],
                takeaways: "Disk health directly impacts system boot success.",
              },
              {
                stepNumber: "5",
                stepTitle: "Restore Boot Configuration Data (BCD)",
                why: "Corrupt or missing BCD files cause boot failures.",
                steps: [
                  "From recovery Command Prompt, run the following commands:",
                  "`bootrec /fixmbr`",
                  "`bootrec /fixboot`",
                  "`bootrec /scanos`",
                  "`bootrec /rebuildbcd`",
                  "Restart after running these commands.",
                ],
                takeaways:
                  "Repairing boot records can recover the boot loader.",
              },
              {
                stepNumber: "6",
                stepTitle: "Consider System Restore or Reinstallation",
                why: "If all else fails, restoring the system or reinstalling Windows can resolve persistent issues.",
                steps: [
                  "Try restoring to a previous restore point from the recovery options.",
                  "Backup important files if possible.",
                  "Perform a clean OS installation if system restore does not fix the problem.",
                ],
                takeaways:
                  "System restore or reinstall is often the last resort for unbootable OS.",
              },
            ],
          },
          {
            problem: "System freezes or lags",
            image: "/desktop.png", // Update with your actual image path
            problemDescription:
              "The computer becomes unresponsive or slow during normal use, which can be caused by resource overload, software conflicts, malware, or hardware issues.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Close Unnecessary Programs",
                why: "Running too many applications can consume system resources, causing lag.",
                steps: [
                  "Press Ctrl + Shift + Esc to open Task Manager.",
                  "Identify programs consuming high CPU, memory, or disk usage.",
                  "Right-click and select 'End Task' on unnecessary programs.",
                ],
                takeaways: "Reducing active applications frees up resources.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check for Malware",
                why: "Malware can cause system slowdowns and freezes.",
                steps: [
                  "Run a full system scan using a trusted antivirus or antimalware tool.",
                  "Quarantine or remove any detected threats.",
                  "Restart the computer after cleaning.",
                ],
                takeaways: "Ensuring a clean system improves performance.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Device Drivers",
                why: "Outdated or corrupt drivers can cause system instability.",
                steps: [
                  "Open Device Manager (Win + X > Device Manager).",
                  "Look for devices with warning icons.",
                  "Right-click and select 'Update driver' or visit the manufacturer’s website.",
                  "Restart the system after updates.",
                ],
                takeaways:
                  "Updated drivers help maintain hardware compatibility.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for Windows Updates",
                why: "Missing updates can lead to bugs affecting system performance.",
                steps: [
                  "Go to Settings > Update & Security > Windows Update.",
                  "Click 'Check for updates' and install any available updates.",
                  "Restart the PC if required.",
                ],
                takeaways:
                  "Keeping the OS updated ensures stability and security.",
              },
              {
                stepNumber: "5",
                stepTitle: "Test Hardware Components",
                why: "Faulty RAM, hard drives, or overheating can cause freezes.",
                steps: [
                  "Run memory diagnostics (Windows Memory Diagnostic or MemTest86).",
                  "Check hard drive health using tools like CrystalDiskInfo.",
                  "Ensure the system isn’t overheating; clean fans and vents.",
                ],
                takeaways: "Hardware health is critical for stable operation.",
              },
              {
                stepNumber: "6",
                stepTitle: "Perform System Cleanup",
                why: "Temporary files and bloatware can degrade performance.",
                steps: [
                  "Use built-in Disk Cleanup tool or third-party utilities.",
                  "Uninstall unnecessary programs.",
                  "Disable startup programs that slow boot time.",
                ],
                takeaways: "Regular maintenance keeps system running smoothly.",
              },
            ],
          },
          {
            problem: "Driver conflicts or failures",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Problems caused by incompatible, outdated, or corrupt drivers can lead to hardware malfunction, system instability, or error messages.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Identify Problematic Drivers",
                why: "Knowing which drivers are causing issues helps target fixes.",
                steps: [
                  "Open Device Manager (Press Win + X and select Device Manager).",
                  "Look for devices with a yellow warning icon or red X.",
                  "Note down the device names and error codes if any.",
                ],
                takeaways:
                  "Identifying the faulty driver is the first troubleshooting step.",
              },
              {
                stepNumber: "2",
                stepTitle: "Update Drivers",
                why: "Updating drivers can fix bugs and improve compatibility.",
                steps: [
                  "Right-click the problematic device and select 'Update driver'.",
                  "Choose 'Search automatically for updated driver software'.",
                  "Alternatively, visit the manufacturer’s website to download the latest drivers.",
                  "Restart the PC after updating.",
                ],
                takeaways:
                  "Keeping drivers updated prevents many hardware issues.",
              },
              {
                stepNumber: "3",
                stepTitle: "Roll Back Drivers",
                why: "Sometimes new drivers cause problems; reverting can fix it.",
                steps: [
                  "In Device Manager, right-click the device and select 'Properties'.",
                  "Go to the 'Driver' tab and click 'Roll Back Driver' if available.",
                  "Restart the computer.",
                ],
                takeaways:
                  "Rolling back to a previous driver version may restore stability.",
              },
              {
                stepNumber: "4",
                stepTitle: "Uninstall and Reinstall Drivers",
                why: "Removing corrupt drivers and reinstalling fresh copies can resolve conflicts.",
                steps: [
                  "Right-click the device and select 'Uninstall device'.",
                  "Restart the PC to allow Windows to reinstall the driver automatically.",
                  "If not reinstalled, manually install the driver from the manufacturer’s website.",
                ],
                takeaways:
                  "Reinstalling drivers can fix corruption or installation issues.",
              },
              {
                stepNumber: "5",
                stepTitle: "Use System Restore",
                why: "Restoring the system to a point before driver problems began can fix conflicts.",
                steps: [
                  "Open System Restore from the Control Panel or recovery options.",
                  "Choose a restore point dated before the issue started.",
                  "Follow prompts to complete the restore process.",
                ],
                takeaways:
                  "System Restore can undo problematic driver changes.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check for Windows Updates",
                why: "Windows updates often include driver fixes and patches.",
                steps: [
                  "Go to Settings > Update & Security > Windows Update.",
                  "Click 'Check for updates' and install any available updates.",
                  "Restart after updating.",
                ],
                takeaways:
                  "Keeping Windows updated ensures compatibility and security.",
              },
            ],
          },
          {
            problem: "Frequent error messages or crashes",
            image: "/desktop.png",
            problemDescription:
              "The computer frequently displays error messages or unexpectedly crashes, which can be caused by software conflicts, corrupted files, insufficient resources, or hardware issues.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Note the Error Messages",
                why: "Understanding the error helps identify the root cause.",
                steps: [
                  "Write down the exact error message or code when it appears.",
                  "Search online for the error details to find common solutions.",
                ],
                takeaways:
                  "Error messages provide clues to troubleshoot effectively.",
              },
              {
                stepNumber: "2",
                stepTitle: "Update Software and Drivers",
                why: "Outdated software or drivers often cause crashes and errors.",
                steps: [
                  "Check for and install updates for your operating system.",
                  "Update all device drivers via Device Manager or manufacturer’s sites.",
                  "Restart the computer after updates.",
                ],
                takeaways:
                  "Keeping software current reduces compatibility issues.",
              },
              {
                stepNumber: "3",
                stepTitle: "Run System File Checker (SFC)",
                why: "Corrupted system files can cause instability and crashes.",
                steps: [
                  "Open Command Prompt as administrator.",
                  "Type `sfc /scannow` and press Enter.",
                  "Wait for the scan to complete and follow any repair instructions.",
                ],
                takeaways:
                  "Repairing corrupted files restores system stability.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for Malware",
                why: "Malware infections can trigger errors and system crashes.",
                steps: [
                  "Run a full system scan with your antivirus software.",
                  "Remove or quarantine detected threats.",
                  "Restart the PC after cleanup.",
                ],
                takeaways: "A malware-free system runs more reliably.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check Hardware Health",
                why: "Faulty RAM, hard drives, or overheating can cause crashes.",
                steps: [
                  "Run memory diagnostics using Windows Memory Diagnostic or MemTest86.",
                  "Check hard drive health with CrystalDiskInfo or similar tools.",
                  "Ensure proper cooling and clean dust from fans and vents.",
                ],
                takeaways:
                  "Healthy hardware is essential for stable operation.",
              },
              {
                stepNumber: "6",
                stepTitle: "Perform Clean Boot",
                why: "Conflicting startup programs can cause errors and crashes.",
                steps: [
                  "Press Win + R, type `msconfig`, and press Enter.",
                  "Under the Services tab, check 'Hide all Microsoft services' then click 'Disable all'.",
                  "Go to the Startup tab and disable unnecessary startup items.",
                  "Restart the PC and observe if issues persist.",
                ],
                takeaways: "Clean boot isolates software conflicts.",
              },
            ],
          },
          {
            problem: "Software not installing or updating",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Issues preventing software from installing or updating can be caused by corrupted installation files, insufficient permissions, or conflicts with existing software.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Internet Connection",
                why: "Many software installations and updates require a stable internet connection.",
                steps: [
                  "Ensure your computer is connected to the internet.",
                  "Try loading a webpage to confirm connectivity.",
                ],
                takeaways:
                  "A reliable internet connection is essential for downloading updates.",
              },
              {
                stepNumber: "2",
                stepTitle: "Run Installer as Administrator",
                why: "Lack of permissions can block software installation or updates.",
                steps: [
                  "Right-click the installer file and select 'Run as administrator'.",
                  "Follow the installation prompts.",
                ],
                takeaways:
                  "Administrator privileges often resolve permission-related issues.",
              },
              {
                stepNumber: "3",
                stepTitle: "Disable Antivirus Temporarily",
                why: "Some antivirus programs may mistakenly block installations or updates.",
                steps: [
                  "Temporarily disable your antivirus software.",
                  "Attempt the installation or update again.",
                  "Re-enable antivirus once done.",
                ],
                takeaways:
                  "Antivirus software can interfere with software installations.",
              },
              {
                stepNumber: "4",
                stepTitle: "Free Up Disk Space",
                why: "Insufficient disk space can prevent installations or updates.",
                steps: [
                  "Check available disk space on your primary drive.",
                  "Delete unnecessary files or uninstall unused programs to free space.",
                ],
                takeaways:
                  "Enough disk space is required for software installation.",
              },
              {
                stepNumber: "5",
                stepTitle: "Clear Temporary Files",
                why: "Corrupt temporary files can cause installation errors.",
                steps: [
                  "Press Win + R, type `%temp%`, and press Enter.",
                  "Delete all files in the temporary folder.",
                  "Try installing or updating the software again.",
                ],
                takeaways: "Clearing temp files can fix installation problems.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check for Windows Updates",
                why: "Outdated system files can cause compatibility issues.",
                steps: [
                  "Go to Settings > Update & Security > Windows Update.",
                  "Install all available updates and restart your PC.",
                ],
                takeaways:
                  "Keeping Windows updated helps with software compatibility.",
              },
            ],
          },
          {
            problem: "Compatibility issues with older/newer software",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Older software may not work correctly on newer operating systems, and some new software might not support older hardware or OS versions, causing errors or failures.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check System Requirements",
                why: "Ensuring your system meets software requirements prevents compatibility problems.",
                steps: [
                  "Review the software’s official system requirements on the vendor’s website.",
                  "Verify your operating system version, processor, RAM, and storage meet these specs.",
                ],
                takeaways:
                  "Matching system requirements avoids installation and runtime issues.",
              },
              {
                stepNumber: "2",
                stepTitle: "Use Compatibility Mode",
                why: "Running software in compatibility mode can simulate an older OS environment.",
                steps: [
                  "Right-click the software executable or installer.",
                  "Select 'Properties', then the 'Compatibility' tab.",
                  "Check 'Run this program in compatibility mode for:' and choose an older Windows version.",
                  "Apply changes and try running the software.",
                ],
                takeaways:
                  "Compatibility mode often resolves issues with legacy software.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Software or Drivers",
                why: "Developers often release patches for compatibility with new OS versions.",
                steps: [
                  "Check the software vendor’s site for updates or patches.",
                  "Update device drivers, especially for graphics and peripherals.",
                ],
                takeaways:
                  "Keeping software and drivers current improves compatibility.",
              },
              {
                stepNumber: "4",
                stepTitle: "Run Software as Administrator",
                why: "Some software requires elevated permissions to function properly.",
                steps: [
                  "Right-click the software icon.",
                  "Select 'Run as administrator'.",
                ],
                takeaways:
                  "Administrator mode can prevent permission-related failures.",
              },
              {
                stepNumber: "5",
                stepTitle: "Consider Virtual Machines or Emulators",
                why: "Virtual environments can run incompatible software safely.",
                steps: [
                  "Use virtualization tools like VirtualBox or VMware to create a virtual OS.",
                  "Install the older or incompatible software inside the virtual machine.",
                ],
                takeaways:
                  "Virtual machines enable running legacy or incompatible software.",
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
            image: "/desktop.png", // replace with the correct image path
            problemDescription:
              "The computer cannot access the internet due to issues with the network adapter, router, or ISP. This could be caused by misconfigured settings, hardware faults, or service outages.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Physical Connections",
                why: "Loose or unplugged cables can disconnect the internet.",
                steps: [
                  "Ensure the Ethernet cable is securely plugged into the PC and router.",
                  "Check if the Wi-Fi is enabled and connected on your computer.",
                  "Verify that the router has power and indicator lights are on.",
                ],
                takeaways:
                  "Most connection issues are caused by physical disconnections.",
              },
              {
                stepNumber: "2",
                stepTitle: "Restart Devices",
                why: "Rebooting the router and PC can fix many temporary network issues.",
                steps: [
                  "Turn off the router and modem, wait 30 seconds, then power them back on.",
                  "Restart your computer after the router is fully powered on.",
                  "Try connecting again.",
                ],
                takeaways:
                  "Rebooting resets network settings and clears temporary glitches.",
              },
              {
                stepNumber: "3",
                stepTitle: "Run Windows Network Troubleshooter",
                why: "This tool automatically detects and tries to fix network problems.",
                steps: [
                  "Go to Settings > Network & Internet > Status.",
                  "Click on 'Network troubleshooter' and follow the prompts.",
                  "Apply any suggested fixes.",
                ],
                takeaways:
                  "Windows provides built-in tools for automatic diagnosis.",
              },
              {
                stepNumber: "4",
                stepTitle: "Reset Network Adapter",
                why: "Network adapter misconfigurations can prevent internet access.",
                steps: [
                  "Press Win + X and select 'Device Manager'.",
                  "Expand 'Network adapters' and right-click your network device.",
                  "Select 'Disable device', wait a few seconds, then enable it again.",
                ],
                takeaways:
                  "Resetting the adapter can resolve driver or hardware conflicts.",
              },
              {
                stepNumber: "5",
                stepTitle: "Flush DNS & Renew IP",
                why: "Corrupted DNS or IP conflicts can block internet access.",
                steps: [
                  "Open Command Prompt as administrator.",
                  "Type the following commands one by one and press Enter after each:",
                  `"ipconfig /release"`,
                  `"ipconfig /renew"`,
                  `"ipconfig /flushdns"`,
                ],
                takeaways:
                  "Refreshing network configurations can resolve access issues.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check for ISP Outage",
                why: "The issue might be external, from your internet provider.",
                steps: [
                  "Check your router’s status lights or access its settings page.",
                  "Use mobile data to visit your ISP’s website or check their support channels.",
                  "Contact your ISP if the issue persists across multiple devices.",
                ],
                takeaways:
                  "Sometimes the issue is outside your control and needs ISP support.",
              },
            ],
          },
          {
            problem: "Slow internet speed",
            image: "/desktop.png", // update with actual image path
            problemDescription:
              "Internet connection works but is noticeably slow, affecting browsing, streaming, or downloading. This could be caused by network congestion, outdated hardware, malware, or ISP issues.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Test Internet Speed",
                why: "Knowing your actual speed helps determine if it's below your plan.",
                steps: [
                  "Go to a speed test site like speedtest.net.",
                  "Run the test and note the download and upload speeds.",
                  "Compare them to the speeds promised by your ISP.",
                ],
                takeaways:
                  "Testing gives a baseline to understand if performance is abnormal.",
              },
              {
                stepNumber: "2",
                stepTitle: "Restart Router and Modem",
                why: "Temporary glitches or memory overload can slow down your network devices.",
                steps: [
                  "Unplug the router and modem from power.",
                  "Wait 30 seconds, then plug them back in.",
                  "Wait for all lights to return to normal before retesting speed.",
                ],
                takeaways: "Rebooting often restores optimal performance.",
              },
              {
                stepNumber: "3",
                stepTitle: "Limit Background Usage",
                why: "Other apps or devices on your network might be using bandwidth.",
                steps: [
                  "Close background apps like cloud sync, streaming, or large downloads.",
                  "Pause Windows updates temporarily.",
                  "Check if other users on the network are using heavy bandwidth.",
                ],
                takeaways:
                  "Bandwidth is shared—too many users or apps reduce speed.",
              },
              {
                stepNumber: "4",
                stepTitle: "Use a Wired Connection",
                why: "Ethernet is faster and more stable than Wi-Fi.",
                steps: [
                  "Connect your PC directly to the router using an Ethernet cable.",
                  "Test the speed again and compare with Wi-Fi results.",
                ],
                takeaways:
                  "Wired connections provide better consistency and speed.",
              },
              {
                stepNumber: "5",
                stepTitle: "Scan for Malware",
                why: "Malware can consume network resources or slow down performance.",
                steps: [
                  "Run a full system scan using your antivirus software.",
                  "Remove or quarantine any threats found.",
                  "Restart your PC after cleanup.",
                ],
                takeaways: "A secure system avoids hidden network drain.",
              },
              {
                stepNumber: "6",
                stepTitle: "Update Network Drivers",
                why: "Outdated drivers can limit network performance.",
                steps: [
                  "Open Device Manager (Win + X > Device Manager).",
                  "Expand 'Network adapters', right-click your device, and choose 'Update driver'.",
                  "Search automatically for updated drivers.",
                ],
                takeaways:
                  "Updated drivers help maintain optimal connectivity.",
              },
              {
                stepNumber: "7",
                stepTitle: "Contact ISP",
                why: "There might be issues from your provider's end or throttling in place.",
                steps: [
                  "Report your speed test results to your ISP.",
                  "Ask if there are outages, bandwidth limits, or service upgrades available.",
                ],
                takeaways:
                  "Sometimes the problem requires your ISP's attention or plan upgrade.",
              },
            ],
          },
          {
            problem: "Network adapter not recognized",
            image: "/desktop.png", // replace with your actual image path
            problemDescription:
              "The computer does not detect the network adapter, preventing any network connection. This can happen due to driver issues, hardware failure, or misconfiguration.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Device Manager",
                why: "To verify if the adapter is detected by Windows and if there are any errors.",
                steps: [
                  "Press Win + X and select Device Manager.",
                  "Expand 'Network adapters' and look for your adapter.",
                  "If it’s missing or shows a warning icon, there’s an issue.",
                ],
                takeaways:
                  "Device Manager helps identify if the adapter is recognized or has errors.",
              },
              {
                stepNumber: "2",
                stepTitle: "Enable Network Adapter",
                why: "Sometimes the adapter might be disabled accidentally.",
                steps: [
                  "In Device Manager, right-click the network adapter and select 'Enable device' if disabled.",
                  "Check if the device starts working.",
                ],
                takeaways: "Enabling the adapter may restore connectivity.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update or Reinstall Network Drivers",
                why: "Corrupted or outdated drivers can cause detection issues.",
                steps: [
                  "Right-click the adapter in Device Manager and choose 'Update driver'.",
                  "Select 'Search automatically for updated driver software'.",
                  "If updating doesn’t help, uninstall the driver and restart your PC to reinstall automatically.",
                ],
                takeaways: "Fresh drivers often fix recognition problems.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check BIOS/UEFI Settings",
                why: "The network adapter might be disabled at firmware level.",
                steps: [
                  "Restart your computer and enter BIOS/UEFI setup (usually by pressing Del, F2, or F10 during startup).",
                  "Look for onboard devices or integrated peripherals settings.",
                  "Ensure the network adapter is enabled.",
                ],
                takeaways: "BIOS settings control hardware availability.",
              },
              {
                stepNumber: "5",
                stepTitle: "Run Network Troubleshooter",
                why: "Windows can automatically diagnose some network adapter issues.",
                steps: [
                  "Go to Settings > Network & Internet > Status.",
                  "Click 'Network troubleshooter' and follow the prompts.",
                ],
                takeaways:
                  "Built-in tools can detect and sometimes fix common problems.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check Physical Connections",
                why: "A loose or damaged adapter or cable can cause detection failure.",
                steps: [
                  "If it’s a PCI or USB adapter, turn off the PC and reseat the adapter.",
                  "Try a different USB port if applicable.",
                  "Check Ethernet cables and ports for damage.",
                ],
                takeaways: "Hardware issues can prevent recognition.",
              },
              {
                stepNumber: "7",
                stepTitle: "Consider Hardware Failure",
                why: "If none of the above work, the adapter may be faulty.",
                steps: [
                  "Test the adapter in another PC if possible.",
                  "Replace with a known working network adapter.",
                ],
                takeaways:
                  "Hardware replacement may be needed if adapter is defective.",
              },
            ],
          },
          {
            problem: "Wi-Fi drops frequently",
            image: "/desktop.png", // update path to your actual image
            problemDescription:
              "The wireless internet connection frequently disconnects or drops, causing interruptions during online activities. This can be caused by interference, driver issues, router problems, or signal strength.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Restart Router and PC",
                why: "Temporary glitches in the router or PC can cause connection drops.",
                steps: [
                  "Power off your router and modem.",
                  "Wait for about 30 seconds, then power them back on.",
                  "Restart your PC and reconnect to Wi-Fi.",
                ],
                takeaways:
                  "Simple restarts often fix transient connectivity issues.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check Wi-Fi Signal Strength",
                why: "Weak signal can cause frequent disconnections.",
                steps: [
                  "Move closer to the router.",
                  "Avoid physical obstructions and interference from devices like microwaves.",
                  "Check signal bars on your PC’s Wi-Fi icon.",
                ],
                takeaways: "Better signal strength leads to stable connection.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Wi-Fi Drivers",
                why: "Outdated or corrupted drivers can cause instability.",
                steps: [
                  "Open Device Manager.",
                  "Expand 'Network adapters' and right-click your Wi-Fi adapter.",
                  "Select 'Update driver' and follow prompts to update.",
                ],
                takeaways:
                  "Keeping drivers current improves device performance.",
              },
              {
                stepNumber: "4",
                stepTitle: "Change Wi-Fi Channel",
                why: "Interference from neighboring networks can cause drops.",
                steps: [
                  "Access your router’s admin panel via its IP address (e.g., 192.168.1.1).",
                  "Log in and navigate to Wireless settings.",
                  "Change the Wi-Fi channel to a less crowded one (channels 1, 6, or 11 are common).",
                  "Save settings and reconnect.",
                ],
                takeaways: "Changing channel reduces wireless interference.",
              },
              {
                stepNumber: "5",
                stepTitle: "Disable Power Saving on Wi-Fi Adapter",
                why: "Power saving can cause the adapter to disconnect to save battery.",
                steps: [
                  "Open Device Manager.",
                  "Right-click your Wi-Fi adapter and select Properties.",
                  "Go to the Power Management tab.",
                  "Uncheck 'Allow the computer to turn off this device to save power'.",
                ],
                takeaways: "Disabling power saving stabilizes connection.",
              },
              {
                stepNumber: "6",
                stepTitle: "Reset Network Settings",
                why: "Corrupted network configs can cause issues.",
                steps: [
                  "Open Settings > Network & Internet > Status.",
                  "Click 'Network reset' and follow instructions.",
                  "Restart your PC and reconnect to Wi-Fi.",
                ],
                takeaways: "Resets network configs to default, fixing issues.",
              },
              {
                stepNumber: "7",
                stepTitle: "Check for Router Firmware Updates",
                why: "Outdated firmware can cause performance problems.",
                steps: [
                  "Log into your router’s admin panel.",
                  "Check for firmware updates and install if available.",
                ],
                takeaways:
                  "Up-to-date firmware ensures better stability and security.",
              },
              {
                stepNumber: "8",
                stepTitle: "Test with Another Device",
                why: "To determine if the issue is with the PC or router.",
                steps: [
                  "Connect another device to the same Wi-Fi network.",
                  "Check if it also disconnects frequently.",
                ],
                takeaways: "Helps isolate the source of the problem.",
              },
            ],
          },
          {
            problem: "IP address conflict",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Occurs when two devices on the same network are assigned the same IP address, causing network connectivity issues like inability to access the internet or local network resources.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Restart Your Router and PC",
                why: "Refreshing network settings can resolve temporary IP conflicts.",
                steps: [
                  "Turn off your PC.",
                  "Restart your router by unplugging it for 30 seconds and plugging it back in.",
                  "Turn your PC back on and reconnect to the network.",
                ],
                takeaways:
                  "This often resolves IP conflicts by renewing IP addresses.",
              },
              {
                stepNumber: "2",
                stepTitle: "Release and Renew IP Address",
                why: "Manually refreshing your IP address can fix conflicts.",
                steps: [
                  "Open Command Prompt as administrator.",
                  "Type `ipconfig /release` and press Enter.",
                  "Then type `ipconfig /renew` and press Enter.",
                ],
                takeaways:
                  "Forces your PC to request a new IP from the DHCP server.",
              },
              {
                stepNumber: "3",
                stepTitle: "Set a Static IP Address",
                why: "Assigning a unique static IP can prevent conflicts.",
                steps: [
                  "Open Network Settings.",
                  "Find your network adapter and open its properties.",
                  "Select IPv4 settings and choose 'Use the following IP address'.",
                  "Enter an IP address outside the DHCP range of your router.",
                  "Fill in subnet mask and default gateway, then save settings.",
                ],
                takeaways:
                  "Avoids dynamic IP conflicts by using a fixed address.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for Duplicate IPs on the Network",
                why: "Identify devices causing conflicts.",
                steps: [
                  "Access your router’s admin panel.",
                  "Check the list of connected devices and their IPs.",
                  "Look for duplicates and disconnect or reassign IPs as needed.",
                ],
                takeaways:
                  "Helps manage network devices and prevent IP clashes.",
              },
              {
                stepNumber: "5",
                stepTitle: "Update Router Firmware",
                why: "Firmware updates fix bugs that may cause IP conflicts.",
                steps: [
                  "Log into your router’s admin panel.",
                  "Check for firmware updates and install if available.",
                ],
                takeaways: "Keeps your router running smoothly and securely.",
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
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Malicious software that can damage your system, steal data, slow down performance, or cause unexpected behavior.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Run a Full System Antivirus Scan",
                why: "To detect and remove any viruses or malware present on your PC.",
                steps: [
                  "Open your antivirus software.",
                  "Choose the option for a full system scan.",
                  "Start the scan and wait for it to complete.",
                  "Follow the prompts to quarantine or remove any threats found.",
                ],
                takeaways:
                  "Regular scans help maintain system health and security.",
              },
              {
                stepNumber: "2",
                stepTitle: "Update Your Antivirus Software",
                why: "Keeping antivirus definitions current improves detection rates.",
                steps: [
                  "Open your antivirus application.",
                  "Check for updates to virus definitions and software.",
                  "Download and install all available updates.",
                ],
                takeaways:
                  "Staying updated protects against the latest threats.",
              },
              {
                stepNumber: "3",
                stepTitle: "Disconnect From the Internet",
                why: "Prevents the virus from spreading or communicating with external servers.",
                steps: [
                  "Unplug your Ethernet cable or turn off Wi-Fi.",
                  "Avoid using removable media until the infection is cleaned.",
                ],
                takeaways: "Limits further damage during removal.",
              },
              {
                stepNumber: "4",
                stepTitle: "Use Malware Removal Tools",
                why: "Specialized tools can remove persistent or complex infections.",
                steps: [
                  "Download a trusted malware removal tool (e.g., Malwarebytes).",
                  "Run a full scan with the tool.",
                  "Follow the instructions to remove any malware found.",
                ],
                takeaways:
                  "Additional tools may catch infections your antivirus missed.",
              },
              {
                stepNumber: "5",
                stepTitle: "Restore from Backup or Reinstall OS",
                why: "If infection persists or system damage is severe, restoring can be necessary.",
                steps: [
                  "Backup important files if possible.",
                  "Perform a system restore to a clean point or reinstall the operating system.",
                  "Reinstall your applications and restore data.",
                ],
                takeaways: "A clean start ensures no hidden malware remains.",
              },
            ],
          },
          {
            problem: "Spyware or ransomware",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Spyware secretly monitors your activities, while ransomware locks your files and demands payment to restore access.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Disconnect from the Internet Immediately",
                why: "Prevents spyware from sending data and ransomware from spreading.",
                steps: [
                  "Unplug Ethernet cable or disable Wi-Fi.",
                  "Avoid using external drives or sharing files.",
                ],
                takeaways: "Stops further data theft or encryption.",
              },
              {
                stepNumber: "2",
                stepTitle:
                  "Run a Malware Scan with Anti-Spyware and Anti-Ransomware Tools",
                why: "Specialized software can detect and remove spyware or ransomware.",
                steps: [
                  "Use trusted anti-malware tools like Malwarebytes or Windows Defender.",
                  "Run a full system scan.",
                  "Follow the removal instructions carefully.",
                ],
                takeaways: "Early detection can minimize damage.",
              },
              {
                stepNumber: "3",
                stepTitle: "Avoid Paying Ransom",
                why: "Payment does not guarantee file recovery and encourages attackers.",
                steps: [
                  "Do not engage with ransom demands.",
                  "Contact professional cybersecurity support if needed.",
                ],
                takeaways: "Prioritize data recovery through backups.",
              },
              {
                stepNumber: "4",
                stepTitle: "Restore Files from Backup",
                why: "Restoring clean backups is the safest way to recover encrypted files.",
                steps: [
                  "Use recent backups to restore affected files.",
                  "Ensure backups are clean before restoring.",
                ],
                takeaways: "Prevents reinfection from compromised files.",
              },
              {
                stepNumber: "5",
                stepTitle: "Strengthen Security to Prevent Future Attacks",
                why: "Improves your defenses against spyware and ransomware.",
                steps: [
                  "Keep your operating system and software updated.",
                  "Use strong, unique passwords and enable two-factor authentication.",
                  "Regularly update antivirus and anti-malware tools.",
                  "Avoid suspicious links and email attachments.",
                ],
                takeaways: "Good security hygiene reduces risks.",
              },
            ],
          },
          {
            problem: "Unauthorized access attempts",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Attempts by unauthorized users to gain access to your computer or network, risking data theft or damage.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Security Logs and Alerts",
                why: "To identify suspicious activity or repeated access attempts.",
                steps: [
                  "Review system and firewall logs for unknown IP addresses or failed login attempts.",
                  "Enable alerts for unusual activities if available.",
                ],
                takeaways: "Early detection helps prevent breaches.",
              },
              {
                stepNumber: "2",
                stepTitle: "Change All Passwords Immediately",
                why: "Compromised credentials can allow attackers access.",
                steps: [
                  "Use strong, unique passwords for your accounts.",
                  "Enable two-factor authentication wherever possible.",
                ],
                takeaways: "Stronger authentication reduces risk.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Your Software and Security Patches",
                why: "Vulnerabilities can be exploited to gain unauthorized access.",
                steps: [
                  "Regularly update your operating system, applications, and security software.",
                  "Apply patches promptly.",
                ],
                takeaways:
                  "Keeps your system protected against known exploits.",
              },
              {
                stepNumber: "4",
                stepTitle: "Secure Your Network",
                why: "Open or weak networks are easy targets.",
                steps: [
                  "Use strong Wi-Fi passwords and WPA3 encryption if available.",
                  "Disable unused network ports and services.",
                  "Consider setting up a firewall or VPN.",
                ],
                takeaways:
                  "Network security is key to preventing unauthorized access.",
              },
              {
                stepNumber: "5",
                stepTitle: "Monitor Your System Regularly",
                why: "Ongoing monitoring helps spot breaches early.",
                steps: [
                  "Use antivirus and anti-intrusion software with real-time protection.",
                  "Regularly scan your system for malware.",
                ],
                takeaways: "Proactive monitoring improves security posture.",
              },
            ],
          },
          {
            problem: "Pop-ups and ads appearing randomly",
            image: "/desktop.png",
            problemDescription:
              "Unexpected pop-ups and ads often indicate adware or potentially unwanted programs installed on your computer.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Run a Full Antivirus and Anti-Adware Scan",
                why: "Detects and removes adware or malware causing the pop-ups.",
                steps: [
                  "Use trusted antivirus software to perform a complete system scan.",
                  "Use specialized anti-adware tools like Malwarebytes AdwCleaner.",
                  "Follow prompts to remove detected threats.",
                ],
                takeaways: "Clearing malware reduces unwanted pop-ups.",
              },
              {
                stepNumber: "2",
                stepTitle: "Uninstall Suspicious or Unwanted Programs",
                why: "Some software bundles adware that causes ads to appear.",
                steps: [
                  "Go to Control Panel > Programs and Features (Windows) or Applications (Mac).",
                  "Review recently installed or unfamiliar programs.",
                  "Uninstall any suspicious software.",
                ],
                takeaways: "Removing adware sources prevents recurring ads.",
              },
              {
                stepNumber: "3",
                stepTitle: "Clear Browser Cache and Reset Browser Settings",
                why: "Browser settings or cache can retain adware scripts causing pop-ups.",
                steps: [
                  "Clear browsing history, cookies, and cache.",
                  "Reset browser settings to default.",
                  "Disable suspicious browser extensions or add-ons.",
                ],
                takeaways: "A clean browser environment stops adware behavior.",
              },
              {
                stepNumber: "4",
                stepTitle: "Keep Software and Browser Updated",
                why: "Updates patch security holes that can be exploited by adware.",
                steps: [
                  "Regularly update your operating system and browsers.",
                  "Enable automatic updates if available.",
                ],
                takeaways: "Up-to-date software reduces vulnerabilities.",
              },
              {
                stepNumber: "5",
                stepTitle: "Practice Safe Browsing Habits",
                why: "Avoids accidentally installing adware or malicious software.",
                steps: [
                  "Do not click on suspicious ads or pop-ups.",
                  "Download software only from official and trusted sources.",
                  "Use ad-blockers or script blockers as an added layer of protection.",
                ],
                takeaways: "Safe habits prevent future adware infections.",
              },
            ],
          },
          {
            problem: "Antivirus disabled or not working",
            image: "/desktop.png",
            problemDescription:
              "Your antivirus software is turned off or malfunctioning, leaving your computer vulnerable to malware and threats.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Antivirus Status",
                why: "To verify if the antivirus is actually disabled or malfunctioning.",
                steps: [
                  "Open your antivirus program and check its status.",
                  "Look for error messages or disabled protection alerts.",
                ],
                takeaways: "Understanding the issue is key to fixing it.",
              },
              {
                stepNumber: "2",
                stepTitle: "Restart Your Computer",
                why: "Sometimes a simple reboot can fix software glitches.",
                steps: [
                  "Save your work and restart your computer.",
                  "Check if the antivirus starts correctly after reboot.",
                ],
                takeaways: "A restart can resolve minor issues.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Antivirus Software",
                why: "Outdated antivirus can malfunction or become incompatible.",
                steps: [
                  "Open your antivirus and check for updates.",
                  "Download and install the latest virus definitions and software updates.",
                ],
                takeaways:
                  "Keeping antivirus updated ensures proper functionality.",
              },
              {
                stepNumber: "4",
                stepTitle: "Run a Full System Scan",
                why: "To detect if malware is disabling the antivirus.",
                steps: [
                  "Attempt to run a full scan manually.",
                  "If unable, consider using a different trusted malware removal tool.",
                ],
                takeaways:
                  "Some malware targets antivirus software specifically.",
              },
              {
                stepNumber: "5",
                stepTitle: "Reinstall Antivirus Software",
                why: "Corrupted installation can cause the antivirus to stop working.",
                steps: [
                  "Uninstall your current antivirus program.",
                  "Download the latest version from the official website.",
                  "Install it and run an initial scan.",
                ],
                takeaways:
                  "Reinstalling often fixes corrupted or broken software.",
              },
              {
                stepNumber: "6",
                stepTitle: "Consider Alternative Security Software",
                why: "If problems persist, switching antivirus may help.",
                steps: [
                  "Research and choose a reputable antivirus program.",
                  "Install and configure it properly.",
                ],
                takeaways:
                  "Using reliable software ensures ongoing protection.",
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
            image: "/desktop.png", // replace with your actual image path
            problemDescription:
              "The computer screen becomes unresponsive or stuck, making it impossible to interact with the system.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Wait and Observe",
                why: "Sometimes the system recovers on its own after processing a heavy task.",
                steps: [
                  "Wait a few minutes to see if the screen becomes responsive again.",
                  "Avoid pressing random keys or clicking repeatedly.",
                ],
                takeaways: "Patience can prevent data loss.",
              },
              {
                stepNumber: "2",
                stepTitle: "Try to Close Unresponsive Programs",
                why: "A specific app may be causing the freeze.",
                steps: [
                  "Press Ctrl + Shift + Esc to open Task Manager.",
                  "Select the unresponsive program and click 'End Task'.",
                ],
                takeaways:
                  "Closing problematic apps may restore system responsiveness.",
              },
              {
                stepNumber: "3",
                stepTitle: "Perform a Soft Reboot",
                why: "Restarting the computer can clear temporary issues.",
                steps: [
                  "If possible, use the Start menu to restart your PC.",
                  "If unresponsive, press and hold the power button until the PC turns off, then turn it back on.",
                ],
                takeaways: "Soft reboot can resolve temporary freezes.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for System Overheating",
                why: "Overheating can cause the system to freeze to protect hardware.",
                steps: [
                  "Ensure fans and vents are clean and unobstructed.",
                  "Use monitoring software to check CPU and GPU temperatures.",
                ],
                takeaways: "Proper cooling helps prevent freezes.",
              },
              {
                stepNumber: "5",
                stepTitle: "Update Drivers and Windows",
                why: "Outdated or faulty drivers can cause system instability.",
                steps: [
                  "Check for Windows updates and install them.",
                  "Update graphics and chipset drivers from manufacturer websites.",
                ],
                takeaways: "Keeping software updated improves stability.",
              },
              {
                stepNumber: "6",
                stepTitle: "Scan for Malware",
                why: "Malware infections can cause freezes.",
                steps: [
                  "Run a full system antivirus scan.",
                  "Use specialized malware removal tools if needed.",
                ],
                takeaways: "Removing malware can restore system functionality.",
              },
            ],
          },
          {
            problem: "Unresponsive applications",
            image: "/desktop.png", // replace with your actual image path
            problemDescription:
              "Applications freeze or stop responding, preventing you from using them or closing them normally.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Try to Close the Application",
                why: "Closing the app may resolve temporary glitches.",
                steps: [
                  "Click the close (X) button on the app window.",
                  "If no response, proceed to force quit.",
                ],
                takeaways: "Sometimes a simple close fixes the issue.",
              },
              {
                stepNumber: "2",
                stepTitle: "Force Quit Using Task Manager",
                why: "Force quitting stops the application from running when it’s unresponsive.",
                steps: [
                  "Press Ctrl + Shift + Esc to open Task Manager.",
                  "Find the unresponsive app under 'Processes'.",
                  "Select it and click 'End Task'.",
                ],
                takeaways: "Force quitting frees system resources.",
              },
              {
                stepNumber: "3",
                stepTitle: "Restart the Computer",
                why: "A restart clears temporary system issues affecting applications.",
                steps: [
                  "Save any work in other apps.",
                  "Restart the computer using the Start menu.",
                ],
                takeaways: "Restarting can fix lingering problems.",
              },
              {
                stepNumber: "4",
                stepTitle: "Update the Application",
                why: "Outdated software may have bugs causing freezes.",
                steps: [
                  "Check for app updates via its menu or website.",
                  "Install any available updates.",
                ],
                takeaways: "Updated apps run more smoothly.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check System Resources",
                why: "Low memory or CPU can cause apps to freeze.",
                steps: [
                  "Open Task Manager and check CPU and RAM usage.",
                  "Close unnecessary programs to free resources.",
                ],
                takeaways: "Adequate resources keep apps responsive.",
              },
              {
                stepNumber: "6",
                stepTitle: "Reinstall the Application",
                why: "Corrupted files can cause unresponsiveness.",
                steps: [
                  "Uninstall the app from Settings or Control Panel.",
                  "Download and install the latest version.",
                ],
                takeaways: "Reinstallation often resolves app issues.",
              },
            ],
          },
          {
            problem: "Cursor lag or delay",
            image: "/desktop.png", // replace with your actual image path
            problemDescription:
              "The mouse cursor moves sluggishly or with a noticeable delay, affecting precise control and productivity.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Mouse Connection",
                why: "Loose or faulty connections can cause lag.",
                steps: [
                  "If wired, ensure the mouse cable is securely plugged in.",
                  "If wireless, check the battery level and replace if low.",
                  "Try reconnecting the mouse or using a different USB port.",
                ],
                takeaways:
                  "Proper connection is essential for smooth cursor movement.",
              },
              {
                stepNumber: "2",
                stepTitle: "Clean the Mouse and Surface",
                why: "Dirt or debris can interfere with sensor performance.",
                steps: [
                  "Wipe the mouse sensor and bottom with a clean cloth.",
                  "Use the mouse on a clean, flat surface or mouse pad.",
                ],
                takeaways:
                  "A clean sensor and surface improve tracking accuracy.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update or Reinstall Mouse Drivers",
                why: "Outdated or corrupted drivers can cause input lag.",
                steps: [
                  "Open Device Manager.",
                  "Locate the mouse device under 'Mice and other pointing devices'.",
                  "Right-click and select 'Update driver' or uninstall and reinstall the driver.",
                ],
                takeaways:
                  "Keeping drivers current ensures optimal performance.",
              },
              {
                stepNumber: "4",
                stepTitle: "Adjust Mouse Settings",
                why: "Incorrect settings may slow cursor response.",
                steps: [
                  "Go to Control Panel > Mouse settings.",
                  "Adjust pointer speed and disable pointer precision if necessary.",
                ],
                takeaways: "Optimizing settings can reduce perceived lag.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check for Interference",
                why: "Wireless devices or USB 3.0 ports can interfere with wireless mouse signals.",
                steps: [
                  "Keep wireless mouse receivers away from USB 3.0 ports and other wireless devices.",
                  "Try switching the receiver to a different USB port.",
                ],
                takeaways:
                  "Reducing interference improves wireless mouse responsiveness.",
              },
              {
                stepNumber: "6",
                stepTitle: "Test with Another Mouse",
                why: "To determine if the issue is with the mouse hardware.",
                steps: [
                  "Connect a different mouse and check if lag persists.",
                  "If the problem disappears, replace the original mouse.",
                ],
                takeaways: "Hardware faults often cause cursor lag.",
              },
            ],
          },
          {
            problem: "Screen resolution or display settings wrong",
            image: "/desktop.png", // replace with your actual image path
            problemDescription:
              "The screen resolution is incorrect, causing blurry images, cut-off display, or improper scaling.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Open Display Settings",
                why: "To adjust resolution and scaling settings easily.",
                steps: [
                  "Right-click on the desktop and select 'Display settings'.",
                  "Alternatively, open Settings > System > Display.",
                ],
                takeaways:
                  "Accessing display settings is the first step to fixing resolution issues.",
              },
              {
                stepNumber: "2",
                stepTitle: "Adjust Screen Resolution",
                why: "Incorrect resolution can cause display problems.",
                steps: [
                  "In Display settings, find 'Display resolution'.",
                  "Select the recommended resolution for your monitor.",
                  "Click 'Apply' and confirm changes.",
                ],
                takeaways:
                  "Using recommended resolution ensures proper display quality.",
              },
              {
                stepNumber: "3",
                stepTitle: "Check Scaling Settings",
                why: "Scaling affects the size of text and apps on the screen.",
                steps: [
                  "In Display settings, find 'Scale and layout'.",
                  "Adjust scaling percentage to your preference (100%, 125%, 150%, etc.).",
                  "Apply changes and see if it improves display.",
                ],
                takeaways:
                  "Correct scaling makes UI elements clear and readable.",
              },
              {
                stepNumber: "4",
                stepTitle: "Update Graphics Drivers",
                why: "Outdated drivers can cause resolution and display issues.",
                steps: [
                  "Open Device Manager.",
                  "Expand 'Display adapters'.",
                  "Right-click your graphics card and select 'Update driver'.",
                  "Choose to search automatically for updated driver software.",
                ],
                takeaways:
                  "Updated drivers ensure compatibility and better display performance.",
              },
              {
                stepNumber: "5",
                stepTitle: "Restart the Computer",
                why: "Restarting helps apply new settings and fixes temporary glitches.",
                steps: [
                  "Save your work and restart your PC.",
                  "Check if resolution and display settings are correctly applied after reboot.",
                ],
                takeaways: "Restart can finalize display setting changes.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check Monitor Settings",
                why: "Incorrect monitor settings can cause display problems.",
                steps: [
                  "Use monitor buttons to open the on-screen display menu.",
                  "Check resolution and scaling settings on the monitor itself.",
                  "Reset to factory defaults if necessary.",
                ],
                takeaways: "Monitor settings can override PC display settings.",
              },
            ],
          },
          {
            problem: "Keyboard or mouse input lag",
            image: "/desktop.png", // update with your actual image path
            problemDescription:
              "Keyboard or mouse inputs respond slowly or intermittently, causing delays in typing or cursor movement.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Physical Connections",
                why: "Loose or faulty connections often cause input lag.",
                steps: [
                  "Ensure wired keyboard or mouse cables are securely plugged in.",
                  "For wireless devices, check batteries and reconnect the receiver.",
                  "Try different USB ports.",
                ],
                takeaways:
                  "Stable connections are crucial for responsive input devices.",
              },
              {
                stepNumber: "2",
                stepTitle: "Remove Interference",
                why: "Wireless signals can be disrupted by other devices.",
                steps: [
                  "Keep wireless receivers away from USB 3.0 ports and other wireless devices.",
                  "Use a USB extension cable to position the receiver closer to the device.",
                ],
                takeaways:
                  "Reducing interference improves wireless device performance.",
              },
              {
                stepNumber: "3",
                stepTitle: "Update Device Drivers",
                why: "Outdated or corrupted drivers can cause lag issues.",
                steps: [
                  "Open Device Manager.",
                  "Find keyboard and mouse devices.",
                  "Right-click and select 'Update driver'.",
                ],
                takeaways:
                  "Keeping drivers updated ensures optimal device function.",
              },
              {
                stepNumber: "4",
                stepTitle: "Check for Software Conflicts",
                why: "Background programs may cause lag.",
                steps: [
                  "Close unnecessary programs and background apps.",
                  "Temporarily disable third-party mouse or keyboard software.",
                ],
                takeaways: "Conflicts can degrade device responsiveness.",
              },
              {
                stepNumber: "5",
                stepTitle: "Test with Another Device",
                why: "Helps isolate if the issue is hardware-related.",
                steps: [
                  "Try using a different keyboard or mouse.",
                  "If the issue disappears, consider replacing the faulty device.",
                ],
                takeaways: "Hardware faults are common causes of input lag.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check System Performance",
                why: "High CPU or memory usage can slow input processing.",
                steps: [
                  "Open Task Manager and check CPU and memory usage.",
                  "Close high-usage applications.",
                ],
                takeaways: "Optimizing system resources can reduce lag.",
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
            problemDescription:
              "Your computer cannot find a bootable operating system, often showing an error like 'Boot device not found' or 'No bootable device'.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Boot Order in BIOS/UEFI",
                why: "The system may be trying to boot from the wrong device.",
                steps: [
                  "Restart the computer and enter BIOS/UEFI (commonly F2, F10, DEL, or ESC during boot).",
                  "Go to the 'Boot' tab.",
                  "Ensure your primary hard drive is set as the first boot device.",
                  "Save and exit BIOS.",
                ],
                takeaways:
                  "Incorrect boot order can prevent the OS from loading.",
              },
              {
                stepNumber: "2",
                stepTitle: "Check Physical Drive Connection",
                why: "Loose or disconnected drives won’t be detected during boot.",
                steps: [
                  "Power off the computer and unplug it.",
                  "Open the case and check the SATA/power cables connected to the hard drive.",
                  "Reseat or replace cables if necessary.",
                ],
                takeaways:
                  "Physical connection issues can mimic boot failures.",
              },
              {
                stepNumber: "3",
                stepTitle: "Run Startup Repair",
                why: "Windows may have corrupted boot files.",
                steps: [
                  "Boot from a Windows installation USB or DVD.",
                  "Click 'Repair your computer' > 'Troubleshoot' > 'Startup Repair'.",
                  "Follow the prompts to fix boot issues.",
                ],
                takeaways:
                  "Startup Repair can resolve many software-based boot problems.",
              },
              {
                stepNumber: "4",
                stepTitle: "Use Command Prompt to Rebuild BCD",
                why: "The Boot Configuration Data (BCD) might be missing or corrupted.",
                steps: [
                  "Boot into recovery mode (same as above).",
                  "Open Command Prompt.",
                  "Run the following commands one by one:",
                  `"bootrec /fixmbr"`,
                  `"bootrec /fixboot"`,
                  `"bootrec /scanos"`,
                  `"bootrec /rebuildbcd"`,
                ],
                takeaways: "Rebuilding BCD helps restore boot functionality.",
              },
              {
                stepNumber: "5",
                stepTitle: "Test with Another Bootable Device",
                why: "To rule out a failing drive.",
                steps: [
                  "Try booting from a bootable USB or external OS.",
                  "If successful, your internal drive may be failing.",
                ],
                takeaways: "Bootable media can help confirm drive health.",
              },
              {
                stepNumber: "6",
                stepTitle: "Replace the Drive (if needed)",
                why: "Hard drives with mechanical or logical failure need replacement.",
                steps: [
                  "If the drive is not recognized at all or makes clicking sounds, consider replacing it.",
                  "Install a new drive and reinstall the OS.",
                ],
                takeaways: "Drive failure is a common reason for boot errors.",
              },
            ],
          },
          {
            problem: "Stuck in BIOS",
            image: "/desktop.png", // Replace with the actual path
            problemDescription:
              "The computer keeps loading into the BIOS/UEFI screen instead of booting into the operating system.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Check Boot Order Settings",
                why: "The system might not be pointing to the correct bootable device.",
                steps: [
                  "In BIOS/UEFI, navigate to the 'Boot' tab.",
                  "Make sure your main hard drive or SSD is listed as the first boot device.",
                  "Save changes and exit BIOS (usually F10).",
                ],
                takeaways:
                  "A wrong boot sequence will cause the system to return to BIOS repeatedly.",
              },
              {
                stepNumber: "2",
                stepTitle: "Ensure Boot Drive Is Detected",
                why: "The system won't boot if it can’t detect the drive with the OS.",
                steps: [
                  "Still in BIOS, check under 'Storage' or 'Drives' to see if your hard drive is listed.",
                  "If not detected, power off and physically check drive connections.",
                  "Reconnect or reseat the drive cables if necessary.",
                ],
                takeaways:
                  "A disconnected or failed drive leads to boot failure.",
              },
              {
                stepNumber: "3",
                stepTitle: "Disable Fast Boot or Secure Boot (Temporarily)",
                why: "Some BIOS features can interfere with normal boot on certain systems.",
                steps: [
                  "In BIOS, find and disable 'Fast Boot' and/or 'Secure Boot'.",
                  "Save changes and exit, then restart the system.",
                ],
                takeaways:
                  "Disabling these options can help troubleshoot boot issues.",
              },
              {
                stepNumber: "4",
                stepTitle: "Reset BIOS to Default Settings",
                why: "Incorrect BIOS settings may prevent normal booting.",
                steps: [
                  "Go to the 'Exit' or 'Save & Exit' tab in BIOS.",
                  "Select 'Load Setup Defaults' or 'Reset to Default'.",
                  "Save and exit the BIOS.",
                ],
                takeaways: "Resetting can clear any misconfigurations.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check for OS Installation",
                why: "If there’s no OS installed, the system will stay in BIOS.",
                steps: [
                  "Try booting from a Windows or Linux USB drive.",
                  "If successful, check whether the internal OS is intact.",
                  "Reinstall the operating system if necessary.",
                ],
                takeaways: "No operating system = no boot.",
              },
              {
                stepNumber: "6",
                stepTitle: "Update BIOS Firmware",
                why: "A BIOS bug or outdated firmware can cause boot issues.",
                steps: [
                  "Visit your motherboard or laptop manufacturer’s website.",
                  "Download the latest BIOS firmware and follow their update instructions carefully.",
                  "Apply update using USB or built-in utility.",
                ],
                takeaways:
                  "A firmware update may resolve persistent BIOS loop problems.",
              },
            ],
          },
          {
            problem: "Incorrect BIOS settings",
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "Misconfigured BIOS settings can prevent the system from booting properly or cause hardware and performance issues.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Access BIOS/UEFI",
                why: "You need to access the BIOS to view and correct the settings.",
                steps: [
                  "Restart your computer.",
                  "Press the BIOS key during startup (commonly F2, F10, DEL, or ESC).",
                  "Wait for the BIOS/UEFI screen to appear.",
                ],
                takeaways:
                  "Accessing BIOS is the first step to troubleshooting configuration issues.",
              },
              {
                stepNumber: "2",
                stepTitle: "Load BIOS Defaults",
                why: "Restoring defaults eliminates potentially harmful custom changes.",
                steps: [
                  "Navigate to the 'Exit' or 'Save & Exit' tab.",
                  "Select 'Load Setup Defaults' or 'Reset to Default Settings'.",
                  "Confirm the reset and save changes before exiting.",
                ],
                takeaways:
                  "Default settings provide a stable starting point for most systems.",
              },
              {
                stepNumber: "3",
                stepTitle: "Verify Boot Order",
                why: "Incorrect boot device priority can prevent the OS from loading.",
                steps: [
                  "Go to the 'Boot' tab in BIOS.",
                  "Ensure the drive with the operating system is listed first.",
                  "Rearrange if necessary, then save and exit.",
                ],
                takeaways:
                  "Boot order is a common misconfiguration that leads to startup issues.",
              },
              {
                stepNumber: "4",
                stepTitle: "Disable Unnecessary Features",
                why: "Features like Secure Boot or Fast Boot may cause compatibility problems.",
                steps: [
                  "In the BIOS, locate 'Secure Boot' and set it to 'Disabled'.",
                  "Also, try disabling 'Fast Boot' temporarily during troubleshooting.",
                  "Save changes and reboot.",
                ],
                takeaways:
                  "Some BIOS features may conflict with certain hardware or OS configurations.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check Time and Date",
                why: "Incorrect system clock may cause issues with OS boot or internet access.",
                steps: [
                  "In BIOS, verify the system time and date are correct.",
                  "If not, update them accordingly.",
                ],
                takeaways:
                  "Correct system time is essential for boot, updates, and security checks.",
              },
              {
                stepNumber: "6",
                stepTitle: "Update BIOS (if needed)",
                why: "Old BIOS versions may not support newer hardware or OS features.",
                steps: [
                  "Visit the manufacturer’s support website.",
                  "Download the latest BIOS update for your motherboard model.",
                  "Follow the update instructions precisely.",
                ],
                takeaways:
                  "Keeping BIOS up to date improves system stability and compatibility.",
              },
            ],
          },
          {
            problem: "CMOS battery failure",
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "The CMOS battery powers the BIOS memory. If it fails, your system may lose time/date settings, BIOS configurations, or show boot errors like 'CMOS Checksum Error'.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Identify the Symptoms",
                why: "Understanding the signs helps confirm CMOS battery issues.",
                steps: [
                  "Computer shows wrong date/time on every boot.",
                  "BIOS resets to default settings frequently.",
                  "Error messages like 'CMOS Checksum Error' appear at startup.",
                  "You are prompted to press F1 every time to continue booting.",
                ],
                takeaways:
                  "Consistent BIOS resets and incorrect time/date are common indicators.",
              },
              {
                stepNumber: "2",
                stepTitle: "Turn Off and Unplug the PC",
                why: "Safety first—power must be disconnected before opening the case.",
                steps: [
                  "Shut down the computer.",
                  "Unplug the power cable and hold the power button for a few seconds to discharge remaining electricity.",
                ],
                takeaways:
                  "Always ensure the PC is powered off before hardware maintenance.",
              },
              {
                stepNumber: "3",
                stepTitle: "Locate and Replace the CMOS Battery",
                why: "The CMOS battery needs to be replaced if it’s dead.",
                steps: [
                  "Open the computer case.",
                  "Locate the coin-cell battery (usually a CR2032 on the motherboard).",
                  "Gently pop it out and replace it with a new one of the same type.",
                  "Be careful not to touch motherboard circuits directly with your hands.",
                ],
                takeaways:
                  "CMOS batteries are inexpensive and easy to replace.",
              },
              {
                stepNumber: "4",
                stepTitle: "Enter BIOS and Reconfigure Settings",
                why: "After replacing the battery, BIOS settings may be lost.",
                steps: [
                  "Power on the computer and enter the BIOS setup.",
                  "Set the correct date and time.",
                  "Adjust any other system settings you had previously configured.",
                  "Save and exit BIOS.",
                ],
                takeaways:
                  "Reapplying settings ensures proper functionality after battery replacement.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check for Proper Functioning",
                why: "To confirm that the new battery is working as intended.",
                steps: [
                  "Shut down and reboot the system.",
                  "Check if time/date and BIOS settings are retained.",
                  "No error messages should appear at startup.",
                ],
                takeaways:
                  "A working CMOS battery maintains BIOS settings even without power.",
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
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "Applications fail to launch or crash during use due to issues such as corrupted files, missing dependencies, or system incompatibility.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Restart the Computer",
                why: "Temporary system glitches may cause apps to crash or not respond.",
                steps: [
                  "Save all work and restart the computer.",
                  "Try reopening the problematic application after reboot.",
                ],
                takeaways:
                  "A simple restart can often resolve app instability.",
              },
              {
                stepNumber: "2",
                stepTitle: "Update the Application",
                why: "Outdated versions may be incompatible with your current OS or hardware.",
                steps: [
                  "Open the app store or the app’s official website.",
                  "Download and install the latest version of the software.",
                ],
                takeaways:
                  "Keeping apps updated ensures better stability and compatibility.",
              },
              {
                stepNumber: "3",
                stepTitle: "Run as Administrator",
                why: "Some apps need elevated permissions to run properly.",
                steps: [
                  "Right-click on the app icon.",
                  "Select 'Run as administrator'.",
                  "Check if the app works normally.",
                ],
                takeaways:
                  "Permission issues can block app execution or cause crashes.",
              },
              {
                stepNumber: "4",
                stepTitle: "Reinstall the Application",
                why: "Corrupted or missing files can prevent proper functionality.",
                steps: [
                  "Uninstall the application completely.",
                  "Restart your system.",
                  "Download the latest version and reinstall it.",
                ],
                takeaways:
                  "Reinstallation replaces any damaged or missing files.",
              },
              {
                stepNumber: "5",
                stepTitle: "Check for OS Updates",
                why: "App crashes may result from an outdated operating system.",
                steps: [
                  "Go to Settings > Windows Update (or your OS equivalent).",
                  "Download and install any pending updates.",
                  "Restart your system after updates are applied.",
                ],
                takeaways:
                  "OS updates often fix bugs that affect app performance.",
              },
              {
                stepNumber: "6",
                stepTitle: "Check for Conflicting Software",
                why: "Background programs or antivirus software may interfere with apps.",
                steps: [
                  "Temporarily disable antivirus or firewall software.",
                  "Try running the app again.",
                  "If it works, add the app to the antivirus exclusion list.",
                ],
                takeaways:
                  "Security software may block or crash legitimate apps if misconfigured.",
              },
            ],
          },
          {
            problem: "Corrupted installations",
            image: "/desktop.png", // Replace with your actual image path
            problemDescription:
              "Corrupted software installations can cause programs to malfunction, crash on startup, or not run at all. This often results from incomplete downloads, interrupted installations, or disk errors.",
            stepsInfo: [
              {
                stepNumber: "1",
                stepTitle: "Identify the Symptoms",
                why: "Understanding the common signs helps confirm the issue.",
                steps: [
                  "App crashes immediately after launching.",
                  "Missing features or broken UI elements.",
                  "Errors like 'missing DLL files' or 'incomplete installation'.",
                ],
                takeaways:
                  "These indicators suggest the app didn’t install properly or is partially damaged.",
              },
              {
                stepNumber: "2",
                stepTitle: "Uninstall the Program",
                why: "A clean removal clears out broken files and registry entries.",
                steps: [
                  "Go to Control Panel > Programs and Features (or Settings > Apps).",
                  "Find the corrupted app and uninstall it.",
                  "If available, use the app's dedicated uninstaller for a cleaner removal.",
                ],
                takeaways:
                  "Uninstalling is necessary before a clean reinstallation.",
              },
              {
                stepNumber: "3",
                stepTitle: "Delete Leftover Files",
                why: "Corrupted leftovers can interfere with reinstalling.",
                steps: [
                  "After uninstalling, go to `C:/Program Files` or `C:/Program Files (x86)`.",
                  "Delete any remaining folders related to the app.",
                  "Also clear temporary files: open Run (`Win + R`) > type `%temp%` > delete contents.",
                ],
                takeaways:
                  "Manual cleanup ensures a fresh reinstall without leftover corruption.",
              },
              {
                stepNumber: "4",
                stepTitle: "Download the Installer Again",
                why: "Your previous installer may be incomplete or corrupted.",
                steps: [
                  "Go to the official website of the software.",
                  "Download the latest version of the installer.",
                  "Make sure the download completes without interruptions.",
                ],
                takeaways:
                  "Always use a trusted source and verify file integrity where possible.",
              },
              {
                stepNumber: "5",
                stepTitle: "Install the Application as Administrator",
                why: "Elevated permissions ensure the installer can write all necessary files.",
                steps: [
                  "Right-click the installer file.",
                  "Select 'Run as administrator'.",
                  "Follow the setup instructions carefully.",
                ],
                takeaways:
                  "Admin rights prevent installation errors caused by permission issues.",
              },
              {
                stepNumber: "6",
                stepTitle: "Run the Program and Check for Errors",
                why: "This confirms whether the issue is resolved.",
                steps: [
                  "Launch the program after installation.",
                  "Check for missing features or crashes.",
                  "If issues persist, check system compatibility or logs.",
                ],
                takeaways:
                  "If it still fails, deeper system issues may be involved (e.g. disk errors or malware).",
              },
            ],
          },
          {
  problem: "Update failures",
  image: "/desktop.png", // Replace with your actual image path
  problemDescription:
    "Applications or the operating system may fail to update due to connectivity issues, insufficient permissions, corrupted update files, or system misconfigurations.",
  stepsInfo: [
    {
      stepNumber: "1",
      stepTitle: "Check Internet Connection",
      why: "A stable internet connection is required to download update files.",
      steps: [
        "Make sure you're connected to a reliable Wi-Fi or Ethernet network.",
        "Try opening a website to test connectivity.",
        "Restart your router or modem if needed."
      ],
      takeaways: "Update downloads can fail or hang without a stable connection."
    },
    {
      stepNumber: "2",
      stepTitle: "Restart the Computer",
      why: "Pending restarts or locked files may interfere with updates.",
      steps: [
        "Save all work and reboot your system.",
        "Attempt the update again after restarting."
      ],
      takeaways: "Some update processes require a clean reboot to proceed."
    },
    {
      stepNumber: "3",
      stepTitle: "Run the App/OS as Administrator",
      why: "Updates often need elevated permissions to modify system files.",
      steps: [
        "Right-click the application or update tool.",
        "Select 'Run as administrator'.",
        "Try running the update again."
      ],
      takeaways: "Lack of admin rights is a common cause of failed updates."
    },
    {
      stepNumber: "4",
      stepTitle: "Free Up Disk Space",
      why: "Low disk space can block updates from downloading or installing.",
      steps: [
        "Delete unused files or uninstall unnecessary programs.",
        "Use Disk Cleanup (Windows) or Storage Management tools (macOS).",
        "Ensure at least 10–20% free space on the system drive."
      ],
      takeaways: "Updates require temporary space to store and unpack files."
    },
    {
      stepNumber: "5",
      stepTitle: "Clear Update Cache or Temporary Files",
      why: "Corrupted cache files can prevent proper update installation.",
      steps: [
        "For Windows: Stop Windows Update Service (`services.msc`).",
        "Delete contents of `C:/Windows/SoftwareDistribution/Download`.",
        "Restart the service and try again.",
        "For apps, check their cache location and clear temp folders."
      ],
      takeaways: "Clearing the cache removes corrupted or incomplete downloads."
    },
    {
      stepNumber: "6",
      stepTitle: "Check for Error Messages or Logs",
      why: "Error codes help pinpoint what’s going wrong.",
      steps: [
        "Look for update failure messages or codes in the update manager.",
        "Search the exact code online for tailored troubleshooting.",
        "Use built-in tools like Windows Update Troubleshooter if available."
      ],
      takeaways: "Error codes can guide deeper investigation if the basic steps fail."
    }
  ]
}
,
          {
  problem: "Incompatibility with OS updates",
  image: "/desktop.png", // Replace with your actual image path
  problemDescription:
    "After an operating system update, some applications or hardware may stop working correctly due to compatibility issues, outdated drivers, or unsupported features.",
  stepsInfo: [
    {
      stepNumber: "1",
      stepTitle: "Identify Affected Software or Hardware",
      why: "Pinpointing which apps or devices are affected helps narrow the troubleshooting.",
      steps: [
        "Observe which apps crash or refuse to open after the OS update.",
        "Check device functionality (e.g., printers, webcams, etc.).",
        "Refer to app documentation for known OS compatibility issues."
      ],
      takeaways: "Not all apps or devices are immediately compatible with new OS versions."
    },
    {
      stepNumber: "2",
      stepTitle: "Check for Software and Driver Updates",
      why: "App developers often release patches after major OS changes.",
      steps: [
        "Open the software’s update checker or visit the official website.",
        "Download and install the latest version or patch.",
        "Use Device Manager (on Windows) to update drivers for affected hardware."
      ],
      takeaways: "Updating apps and drivers can often resolve incompatibility."
    },
    {
      stepNumber: "3",
      stepTitle: "Enable Compatibility Mode",
      why: "Older programs may need to run in compatibility mode to function.",
      steps: [
        "Right-click the application’s shortcut or `.exe` file.",
        "Choose 'Properties' > 'Compatibility' tab.",
        "Check 'Run this program in compatibility mode' and select a previous OS version.",
        "Apply and try launching the program again."
      ],
      takeaways: "Compatibility mode simulates an older environment for legacy apps."
    },
    {
      stepNumber: "4",
      stepTitle: "Use a Virtual Machine or Emulator",
      why: "If no direct support is available, virtualization can help run legacy software.",
      steps: [
        "Install a virtual machine tool (e.g. VirtualBox or VMware).",
        "Install an older, supported OS version inside the VM.",
        "Run the incompatible software within the virtual environment."
      ],
      takeaways: "Virtual machines allow you to keep using critical legacy tools."
    },
    {
      stepNumber: "5",
      stepTitle: "Contact Software or Hardware Support",
      why: "Some vendors may offer unofficial patches or workarounds.",
      steps: [
        "Visit the official support pages for the product.",
        "Search their forums or knowledge base for recent update issues.",
        "Contact customer support for solutions or recommendations."
      ],
      takeaways: "Official guidance may save time if others have already reported the issue."
    },
    {
      stepNumber: "6",
      stepTitle: "Consider Rolling Back the OS Update",
      why: "If the incompatibility breaks essential workflows, reverting may be necessary.",
      steps: [
        "Go to system recovery or update history in OS settings.",
        "Look for the option to uninstall recent updates or roll back.",
        "Only proceed if you’ve backed up important data."
      ],
      takeaways: "Use rollback as a last resort if compatibility fixes are unavailable."
    }
  ]
}
,
        ],
      },
    ],
  },
];
