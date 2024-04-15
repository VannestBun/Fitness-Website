// import pullUpImg from '../images/pull-up.gif'
// import barRowImg from '../images/bar-row.gif'
// import chinUpsImg from '../images/chin-ups.gif'
// import deadliftImg from '../images/deadlift.gif'
// import widePulldownImg from '../images/wide-pulldown.gif'

// export const backData = [
//   // {
//   //   bodyPart: "back",
//   //   equipment: "cable",
//   //   gifUrl: pullUpImg,
//   //   id: "0007",
//   //   name: "alternate lateral pulldown",
//   //   target: "lats",
//   //   secondaryMuscles: ["biceps", "rhomboids"],
//   //   instructions: [
//   //     "Sit on the cable machine with your back straight and feet flat on the ground.",
//   //     "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
//   //     "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
//   //     "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
//   //     "Repeat for the desired number of repetitions."
//   //   ]
//   // },
//   // {
//   //   bodyPart: "back",
//   //   equipment: "body weight",
//   //   gifUrl: "https://v2.exercisedb.io/image/n0aGFSO9atyMDE",
//   //   id: "3293",
//   //   name: "archer pull up",
//   //   target: "lats",
//   //   secondaryMuscles: ["biceps", "forearms"],
//   //   instructions: [
//   //     "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
//   //     "Engage your core and pull your shoulder blades down and back.",
//   //     "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
//   //     "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
//   //     "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
//   //     "Alternate sides with each repetition."
//   //   ]
//   // },
//   // {
//   //   bodyPart: "back",
//   //   equipment: "leverage machine",
//   //   gifUrl: "https://v2.exercisedb.io/image/awbtYnVfhAu0MH",
//   //   id: "0017",
//   //   name: "assisted pull-up",
//   //   target: "lats",
//   //   secondaryMuscles: ["biceps", "forearms"],
//   //   instructions: [
//   //     "Adjust the machine to your desired weight and height settings.",
//   //     "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
//   //     "Hang with your arms fully extended and your feet off the ground.",
//   //     "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
//   //     "Continue pulling until your chin is above the handles.",
//   //     "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
//   //     "Repeat for the desired number of repetitions."
//   //   ]
//   // },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: pullUpImg,
//     id: "1234",
//     name: "pull-up",
//     target: "lats",
//     secondaryMuscles: ["biceps", "forearms"],
//     instructions: [
//       "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
//       "Hang with your arms fully extended and your body in a straight line.",
//       "Engage your core and pull yourself up towards the bar by bending your arms at the elbows.",
//       "Continue pulling until your chin is above the bar.",
//       "Lower yourself back down with control until your arms are fully extended.",
//       "Repeat for the desired number of repetitions."
//     ]
//   },
//   // {
//   //   bodyPart: "back", 
//   //   equipment: "body weight", 
//   //   gifUrl: "https://v2.exercisedb.io/image/fLlfH1TryBR6tB", 
//   //   id: "1405", name: "back pec stretch", 
//   //   target: "lats", 
//   //   secondaryMuscles: ["shoulders", "chest"], 
//   //   instructions: [
//   //       "Stand tall with your feet shoulder-width apart.", 
//   //       "Extend your arms straight out in front of you, parallel to the ground.", 
//   //       "Cross your arms in front of your body, with your right arm over your left arm.", 
//   //       "Interlock your fingers and rotate your palms away from your body.", 
//   //       "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.", 
//   //       "Hold the stretch for 15-30 seconds, then release.", "Repeat on the opposite side."
//   //   ]
//   // },
//   // {
//   //   bodyPart: "back", 
//   //   equipment: "body weight", 
//   //   gifUrl: "https://v2.exercisedb.io/image/vrKvb3dfgsdAUK", 
//   //   id: "3297", 
//   //   name: "back lever", 
//   //   target: "upper back", 
//   //   secondaryMuscles: ["biceps", "forearms", "core"], 
//   //   instructions: [
//   //       "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.", 
//   //       "Engage your core and pull your shoulder blades down and back.", 
//   //       "Bend your knees and tuck them towards your chest.", 
//   //       "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.", 
//   //       "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.", 
//   //       "Repeat for the desired number of repetitions."
//   //   ]
//   // },
import barRowImg from '../images/bar-row.gif';
import chinUpsImg from '../images/chin-ups.gif';
import deadliftImg from '../images/deadlift.gif';
import widePulldownImg from '../images/wide-pulldown.gif';

export const backData = [
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: barRowImg,
    id: "1",
    name: "Bar Row",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids"],
    instructions: [
      "Stand in front of a barbell with your feet shoulder-width apart.",
      "Bend your knees slightly and hinge at the hips to grab the bar with an overhand grip, hands shoulder-width apart.",
      "Keep your back straight and chest up as you pull the bar towards your lower chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top of the movement, then slowly lower the bar back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: chinUpsImg,
    id: "2",
    name: "Chin-Ups",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Grab a pull-up bar with an underhand grip, hands shoulder-width apart.",
      "Hang with your arms fully extended and feet off the ground.",
      "Engage your back muscles and pull your body up towards the bar until your chin is above the bar.",
      "Pause for a moment at the top of the movement, then slowly lower your body back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: deadliftImg,
    id: "3",
    name: "Deadlift",
    target: "lower back",
    secondaryMuscles: ["hamstrings", "glutes"],
    instructions: [
      "Stand with your feet hip-width apart, toes pointing forward, and a barbell on the ground in front of you.",
      "Bend at your hips and knees to lower your body and grasp the barbell with an overhand grip, hands shoulder-width apart.",
      "Keep your back straight and chest up as you stand up, driving through your heels and lifting the barbell up along your legs.",
      "Pause for a moment at the top of the movement, then slowly lower the barbell back to the ground.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "cable machine",
    gifUrl: widePulldownImg,
    id: "4",
    name: "Wide Pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids"],
    instructions: [
      "Sit at a cable machine with a wide bar attached to the high pulley.",
      "Grasp the bar with an overhand grip, hands wider than shoulder-width apart.",
      "Pull the bar down towards your upper chest, keeping your elbows pointed out to the sides.",
      "Pause for a moment at the bottom of the movement, then slowly release the bar back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
];

