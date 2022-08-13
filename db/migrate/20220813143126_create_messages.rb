class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.belongs_to :email_thread, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :is_open , default: false
      
      t.timestamps
    end
  end
end
