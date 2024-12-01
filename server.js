const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample content for each category
const content = {
  books: [
    'The 5 Love Languages by Gary Chapman.',
    'Attached: The New Science of Adult Attachment by Amir Levine.',
    'Men Are from Mars, Women Are from Venus by John Gray.',
    'Hold Me Tight: Seven Conversations for a Lifetime of Love by Dr. Sue Johnson.',
    'The Relationship Cure by John Gottman.',
    'Getting the Love You Want by Harville Hendrix.',
  ],
  journal: [
    'What do I appreciate most about my partner?',
    'Describe a moment when you felt deeply connected.',
    'What are your love languages, and how do you express them?',
    "Write about a challenge you've faced together and how you overcame it.",
    'List three things that make you feel loved and valued.',
    'What are your hopes for the future of your relationship?',
  ],
  talks: [
    'The Power of Vulnerability by Brené Brown.',
    'How to Make Love Last by Esther Perel.',
    'The Secret to Desire in a Long-Term Relationship by Esther Perel.',
    'Your Body Language May Shape Who You Are by Amy Cuddy.',
    'The Art of Asking by Amanda Palmer.',
    'The Surprising Science of Happiness by Dan Gilbert.',
  ],
  songs: [
    'All of Me by John Legend.',
    'Perfect by Ed Sheeran.',
    'At Last by Etta James.',
    'A Thousand Years by Christina Perri.',
    'Unchained Melody by The Righteous Brothers.',
    "Can't Help Falling in Love by Elvis Presley.",
  ],
  advice: [
    'Communicate openly and honestly with your partner.',
    'Make time for each other, even in busy schedules.',
    'Practice active listening and empathy.',
    'Surprise each other with small gestures of love.',
    'Be willing to compromise and find common ground.',
    'Express gratitude for the little things.',
  ],
  'daily-challenge': [
    'Plan a surprise date for your partner this week.',
    'Write a heartfelt letter to your partner expressing your feelings.',
    "Try a new activity together that you both haven't done before.",
    'Cook a meal together and enjoy it without distractions.',
    'Spend a day without technology and focus on each other.',
    'Create a vision board together for your future.',
  ],
  'weekly-challenge': [
    'Plan a surprise date for your partner this week.',
    'Write a heartfelt letter to your partner expressing your feelings.',
    "Try a new activity together that you both haven't done before.",
    'Cook a meal together and enjoy it without distractions.',
    'Spend a day without technology and focus on each other.',
    'Create a vision board together for your future.',
  ],
  goals: [
    'Plan a surprise date for your partner this week.',
    'Write a heartfelt letter to your partner expressing your feelings.',
    "Try a new activity together that you both haven't done before.",
    'Cook a meal together and enjoy it without distractions.',
    'Spend a day without technology and focus on each other.',
    'Create a vision board together for your future.',
  ],
};

// Route to get random content based on category
app.get('/api/content/:category', (req, res) => {
  const category = req.params.category;

  if (content[category]) {
    const randomContent =
      content[category][Math.floor(Math.random() * content[category].length)];
    res.json(randomContent);
  } else {
    res.status(404).json('No content available for this category.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
