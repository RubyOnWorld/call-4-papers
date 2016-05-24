class AddUserPronoun < ActiveRecord::Migration
  def change
    add_column :users, :pronoun, :string
  end
end
