class CreateJoinTableUserEmailThread < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :email_threads do |t|
      t.index :user_id
      t.index :email_thread_id
    end
  end
end
