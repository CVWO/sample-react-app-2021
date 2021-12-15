class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :title
      t.datetime :start_time
      t.datetime :end_time
      t.string :location
      t.boolean :is_completed

      t.timestamps
    end
  end
end
