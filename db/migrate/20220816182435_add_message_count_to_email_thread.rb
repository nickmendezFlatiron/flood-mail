class AddMessageCountToEmailThread < ActiveRecord::Migration[7.0]
  def change
    add_column :email_threads, :message_count, :integer , default: 1
  end
end
