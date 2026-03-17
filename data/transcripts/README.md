# Transcript Data

Place processed transcript JSON files in this folder. Each file should contain a single processed transcript with its source record and topic entries.

**Workflow:**
1. Use the Transcript Library in the app to process a raw YouTube transcript
2. Click "Download JSON" to save the structured result
3. Move the downloaded `.json` file into this folder
4. Import it in `index.ts`
5. Commit and redeploy — the transcript is now permanently part of the app
