import { Button } from "../ui/button";

const Taskbar = () => {
    return (
        <>
          <div>
            <div>
                <h1>Task Management</h1>
            </div>
            <div>
                <div>
                    <div></div>
                    <select name="Team">
                      {}
                    </select>
                    
                </div>
                <div>
                    <Button>+ Assign Task</Button>
                </div>
            </div>
          </div>
        </>
    );
  }
  

export default Taskbar