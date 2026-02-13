// Daily Challenges and Tips Database
// These rotate on the homepage and are displayed on the /challenges page

const DAILY_CHALLENGES = [
  {
    id: 1,
    type: "behavioral",
    category: "Communication",
    challenge:
      "Tell me about a time you had to explain a complex technical concept to a non-technical person.",
    tip: "Use the STAR method: Describe the Situation, your Task, the Action you took (using analogies and simple language), and the positive Result.",
    difficulty: "medium",
    timeEstimate: "3-5 minutes",
  },
  {
    id: 2,
    type: "behavioral",
    category: "Conflict Resolution",
    challenge: "How do you handle conflict with a coworker?",
    tip: "Focus on active listening, finding common ground, and collaborative problem-solving. Show emotional intelligence and professionalism.",
    difficulty: "medium",
    timeEstimate: "3-5 minutes",
  },
  {
    id: 3,
    type: "behavioral",
    category: "Leadership",
    challenge:
      "Describe a situation where you had to lead a team through a difficult project.",
    tip: "Highlight your communication skills, delegation abilities, and how you motivated the team. Emphasize the outcome and lessons learned.",
    difficulty: "hard",
    timeEstimate: "5-7 minutes",
  },
  {
    id: 4,
    type: "behavioral",
    category: "Problem Solving",
    challenge: "Tell me about a time you failed and what you learned from it.",
    tip: "Be honest but strategic. Choose a real failure, explain what went wrong, and most importantly, emphasize the growth and improvements that resulted.",
    difficulty: "hard",
    timeEstimate: "4-6 minutes",
  },
  {
    id: 5,
    type: "behavioral",
    category: "Adaptability",
    challenge:
      "Describe a time when you had to adapt to significant changes at work.",
    tip: "Show flexibility and positive attitude. Explain how you embraced the change, adjusted your approach, and contributed to the transition.",
    difficulty: "medium",
    timeEstimate: "3-5 minutes",
  },
  {
    id: 6,
    type: "technical",
    category: "System Design",
    challenge: "How would you design a URL shortener like bit.ly?",
    tip: "Start with requirements (scale, features), then discuss database schema, hash generation, caching strategy, and scalability considerations.",
    difficulty: "hard",
    timeEstimate: "10-15 minutes",
  },
  {
    id: 7,
    type: "technical",
    category: "Coding",
    challenge: "Reverse a linked list in-place.",
    tip: "Use three pointers (prev, current, next). Walk through the logic step-by-step before coding. Discuss time complexity: O(n).",
    difficulty: "medium",
    timeEstimate: "15-20 minutes",
  },
  {
    id: 8,
    type: "behavioral",
    category: "Time Management",
    challenge: "How do you prioritize tasks when everything seems urgent?",
    tip: "Discuss frameworks like Eisenhower Matrix (urgent vs important). Mention communication with stakeholders and setting realistic expectations.",
    difficulty: "easy",
    timeEstimate: "2-3 minutes",
  },
  {
    id: 9,
    type: "behavioral",
    category: "Learning",
    challenge:
      "Tell me about a time you had to learn a new technology quickly.",
    tip: "Emphasize your learning strategy: documentation, hands-on practice, seeking help from experts, and how you applied the knowledge successfully.",
    difficulty: "easy",
    timeEstimate: "3-4 minutes",
  },
  {
    id: 10,
    type: "technical",
    category: "Debugging",
    challenge:
      "Walk me through your debugging process when facing a production issue.",
    tip: "Explain systematic approach: reproduce the issue, check logs, isolate the problem, test hypotheses, implement fix, verify, and document.",
    difficulty: "medium",
    timeEstimate: "5-7 minutes",
  },
  {
    id: 11,
    type: "behavioral",
    category: "Teamwork",
    challenge: "Describe a time when you disagreed with a team decision.",
    tip: "Show respect for others' opinions while advocating for your view. Explain how you found compromise or accepted the decision professionally.",
    difficulty: "medium",
    timeEstimate: "3-5 minutes",
  },
  {
    id: 12,
    type: "behavioral",
    category: "Initiative",
    challenge: "Tell me about a project you initiated on your own.",
    tip: "Highlight the problem you identified, why it mattered, how you got buy-in, and the impact of your initiative on the team or company.",
    difficulty: "medium",
    timeEstimate: "4-6 minutes",
  },
  {
    id: 13,
    type: "technical",
    category: "Database",
    challenge:
      "Explain the difference between SQL and NoSQL databases. When would you use each?",
    tip: "Discuss structure (relational vs document), ACID vs BASE, scaling strategies, and use cases. Give concrete examples from your experience.",
    difficulty: "easy",
    timeEstimate: "3-5 minutes",
  },
  {
    id: 14,
    type: "behavioral",
    category: "Feedback",
    challenge: "How do you handle constructive criticism?",
    tip: "Show emotional maturity: listen without defensiveness, ask clarifying questions, reflect on the feedback, and demonstrate how you've implemented it.",
    difficulty: "easy",
    timeEstimate: "2-3 minutes",
  },
  {
    id: 15,
    type: "technical",
    category: "Performance",
    challenge: "How would you optimize a slow-loading web page?",
    tip: "Cover multiple angles: image optimization, code splitting, lazy loading, caching, CDN usage, minification. Mention profiling tools like Lighthouse.",
    difficulty: "medium",
    timeEstimate: "5-7 minutes",
  },
  {
    id: 16,
    type: "behavioral",
    category: "Work-Life Balance",
    challenge: "How do you manage stress and prevent burnout?",
    tip: "Be authentic but professional. Discuss boundaries, self-care practices, time management, and knowing when to ask for help.",
    difficulty: "easy",
    timeEstimate: "2-3 minutes",
  },
  {
    id: 17,
    type: "technical",
    category: "Security",
    challenge:
      "What are common web security vulnerabilities and how do you prevent them?",
    tip: "Cover XSS, CSRF, SQL injection, and authentication issues. Mention security headers, input validation, parameterized queries, and HTTPS.",
    difficulty: "medium",
    timeEstimate: "5-7 minutes",
  },
  {
    id: 18,
    type: "behavioral",
    category: "Career Goals",
    challenge: "Where do you see yourself in five years?",
    tip: "Show ambition aligned with the role. Focus on skill development, impact you want to make, and how this position fits your career trajectory.",
    difficulty: "easy",
    timeEstimate: "2-3 minutes",
  },
  {
    id: 19,
    type: "technical",
    category: "Architecture",
    challenge: "Explain microservices architecture and its trade-offs.",
    tip: "Discuss independence, scalability, technology diversity. Mention challenges: complexity, data consistency, testing. Compare with monoliths.",
    difficulty: "hard",
    timeEstimate: "7-10 minutes",
  },
  {
    id: 20,
    type: "behavioral",
    category: "Client Relations",
    challenge: "Describe a time you had to deliver bad news to a stakeholder.",
    tip: "Show honesty, empathy, and solution-orientation. Explain how you prepared, delivered the message clearly, and proposed alternatives or solutions.",
    difficulty: "medium",
    timeEstimate: "4-5 minutes",
  },
];

// Helper function to get random challenge (changes on each page load)
export const getRandomChallenge = () => {
  const randomIndex = Math.floor(Math.random() * DAILY_CHALLENGES.length);
  return DAILY_CHALLENGES[randomIndex];
};

// Helper function to get challenge by difficulty
export const getChallengesByDifficulty = (difficulty) => {
  return DAILY_CHALLENGES.filter(
    (challenge) => challenge.difficulty === difficulty,
  );
};

// Helper function to get challenges by type
export const getChallengesByType = (type) => {
  return DAILY_CHALLENGES.filter((challenge) => challenge.type === type);
};

// Helper function to get challenges by category
export const getChallengesByCategory = (category) => {
  return DAILY_CHALLENGES.filter(
    (challenge) => challenge.category === category,
  );
};

// Helper function to get all unique categories
export const getAllCategories = () => {
  return [...new Set(DAILY_CHALLENGES.map((challenge) => challenge.category))];
};

export default DAILY_CHALLENGES;
