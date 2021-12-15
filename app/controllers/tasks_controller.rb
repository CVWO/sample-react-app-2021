class TasksController < ApplicationController
  
  # Fetches all tasks from the database
  def index
    @tasks = Task.all
  end
  
end
