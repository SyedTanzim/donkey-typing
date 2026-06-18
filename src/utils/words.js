const words = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes progress when you type consistently every day.",
    "A good typing habit can improve productivity and confidence.",
    "Technology continues to change the way people communicate.",
    "Reading books regularly helps expand vocabulary and knowledge.",
    "Small efforts repeated daily often lead to remarkable results.",
    "The sun slowly disappeared behind the distant mountains.",
    "Learning new skills requires patience, focus, and persistence.",
    "Clear communication is essential for successful teamwork.",
    "The gentle rain created a peaceful atmosphere outside.",
    "Every challenge presents an opportunity to learn something new.",
    "Healthy routines can have a positive impact on your life.",
    "The student completed the assignment before the deadline.",
    "Creativity often emerges when people explore different ideas.",
    "The train arrived at the station exactly on time.",
    "Many people enjoy listening to music while working.",
    "Consistency is often more valuable than short bursts of effort.",
    "The colorful flowers attracted butterflies to the garden.",
    "Good planning can prevent unnecessary stress and confusion.",
    "The curious cat watched the birds from the window.",
    "Success usually comes from preparation and determination.",
    "The library was quiet except for the sound of turning pages.",
    "A balanced diet contributes to better health and energy.",
    "The team celebrated after completing the project successfully.",
    "Learning to type faster can save time in the long run.",
    "The night sky was filled with bright and shining stars.",
    "Regular exercise helps maintain both physical and mental health.",
    "The teacher explained the concept using simple examples.",
    "Everyone has the ability to improve through practice.",
    "The fresh morning air made the walk more enjoyable."
];

export function getRandomText() {
    return words[Math.floor(Math.random() * words.length)];
}