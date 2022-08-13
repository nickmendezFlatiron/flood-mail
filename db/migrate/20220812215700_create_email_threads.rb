class CreateEmailThreads < ActiveRecord::Migration[7.0]
  def change
    create_table :email_threads do |t|
      t.string :subject

      t.timestamps
    end
  end
end
