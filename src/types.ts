export interface SubjectStrategy {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  tips: string[];
}

export interface StudyTask {
  id: string;
  text: string;
  completed: boolean;
  subject: string;
}
