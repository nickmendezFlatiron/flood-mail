class CreateJoinTableChainsUsers < ActiveRecord::Migration[7.0]
  def change
    create_join_table :email_threads, :users do |t|
      t.index  :user_id
      t.index  :email_thread_id
      t.timestamps
    end
  end
end
