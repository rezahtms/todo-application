import Task from "../../../components/pages/tasks/Task";

const CompaniesTasks = ({ params }: { params: { companiesTasks: string } }) => {
  return <Task queryId={params.companiesTasks} />;
};
export default CompaniesTasks;
