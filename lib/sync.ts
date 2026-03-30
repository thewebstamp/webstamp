// lib/sync.ts

import { query } from './db';

export async function syncExistingData() {
  try {
    console.log('Starting data sync...');
    
    // // Sync page_views from user_activities
    // const syncedPageViews = await query(`
    //   INSERT INTO page_views (path, session_id, created_at, ip, city, country, user_agent)
    //   SELECT 
    //     ua.page_path as path,
    //     ua.session_id,
    //     ua.created_at,
    //     us.ip,
    //     us.city,
    //     us.country,
    //     us.user_agent
    //   FROM user_activities ua
    //   LEFT JOIN page_views pv ON ua.session_id = pv.session_id AND ua.created_at = pv.created_at
    //   LEFT JOIN user_sessions us ON ua.session_id = us.session_id
    //   WHERE ua.action_type = 'page_view' AND pv.id IS NULL
    // `);
    
    // // Sync clicks from user_activities
    // const syncedClicks = await query(`
    //   INSERT INTO clicks (element, path, session_id, created_at, ip, city, country, user_agent)
    //   SELECT 
    //     ua.element,
    //     ua.page_path as path,
    //     ua.session_id,
    //     ua.created_at,
    //     us.ip,
    //     us.city,
    //     us.country,
    //     us.user_agent
    //   FROM user_activities ua
    //   LEFT JOIN clicks c ON ua.session_id = c.session_id AND ua.created_at = c.created_at
    //   LEFT JOIN user_sessions us ON ua.session_id = us.session_id
    //   WHERE ua.action_type = 'click' AND c.id IS NULL AND ua.element IS NOT NULL
    // `);
    
    // Update user_sessions with accurate counts
    await query(`
      UPDATE user_sessions us
      SET 
        page_views_count = (
          SELECT COUNT(*) FROM page_views pv WHERE pv.session_id = us.session_id
        ),
        clicks_count = (
          SELECT COUNT(*) FROM clicks c WHERE c.session_id = us.session_id
        )
    `);
    console.log('Updated user session counts');
    
    console.log('Data sync completed successfully');
  } catch (error) {
    console.error('Error syncing data:', error);
    throw error;
  }
}