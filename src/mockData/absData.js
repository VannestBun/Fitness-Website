import sitUpImg from '../images/sit-up.gif';
import hangRaiseImg from '../images/hang-raise.gif';

export const absData = [
    {
        bodyPart: "core",
        equipment: "body weight",
        gifUrl: sitUpImg,
        id: "6",
        name: "Sit-Up",
        target: "abdominals",
        secondaryMuscles: ["hip flexors"],
        instructions: [
          "Lie on your back with your knees bent and feet flat on the ground.",
          "Cross your arms over your chest or place your hands behind your head.",
          "Engage your core and lift your upper body off the ground, bringing your chest towards your knees.",
          "Lower your upper body back down to the starting position with control.",
          "Repeat for the desired number of repetitions."
        ]
    },
    {
        bodyPart: "core",
        equipment: "body weight",
        gifUrl: hangRaiseImg,
        id: "7",
        name: "Hanging Leg Raise",
        target: "abdominals",
        instructions: [
          "Hang from a pull-up bar with your arms fully extended and feet off the ground.",
          "Engage your core muscles to stabilize your body.",
          "Keeping your legs straight, raise them up towards the ceiling as high as possible.",
          "Pause briefly at the top of the movement, then lower your legs back down with control.",
          "Repeat for the desired number of repetitions."
        ]
    }
];
