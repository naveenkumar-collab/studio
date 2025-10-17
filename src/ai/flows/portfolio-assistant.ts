'use server';
/**
 * @fileOverview A portfolio assistant AI agent.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Student } from '@/lib/student-data';

const PortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The user query.'),
  studentData: z
    .string()
    .describe(
      'The portfolio data of the student as a JSON string.'
    ),
});
export type PortfolioAssistantInput = z.infer<
  typeof PortfolioAssistantInputSchema
>;

const PortfolioAssistantOutputSchema = z.object({
  response: z.string().describe('The response to the user query.'),
});
export type PortfolioAssistantOutput = z.infer<
  typeof PortfolioAssistantOutputSchema
>;

export async function portfolioAssistant(
  input: PortfolioAssistantInput
): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: PortfolioAssistantInputSchema },
  output: { schema: PortfolioAssistantOutputSchema },
  prompt: `You are a helpful AI assistant for a developer's portfolio. Your name is "FolioBot". You are friendly and professional. Your goal is to answer questions from visitors and potential employers based on the portfolio data provided.

Keep your answers concise and to the point. If a question is outside the scope of the provided portfolio data, politely decline to answer.

Use the following portfolio information to answer the user's query.

Portfolio Data:
{{{studentData}}}

User Query:
"{{{query}}}"
`,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
